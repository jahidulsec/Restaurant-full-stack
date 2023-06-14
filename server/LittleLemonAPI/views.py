from django.shortcuts import render, get_object_or_404, get_list_or_404
from django.contrib.auth.models import User, Group
from .models import Cart, Order, OrderItem, MenuItem, Category
from .permissions import IsManagerOnly
from rest_framework import generics, viewsets
from rest_framework.response import Response
from rest_framework.throttling import UserRateThrottle, AnonRateThrottle
from rest_framework.decorators import api_view, permission_classes, throttle_classes, action
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from .serializers import MenuItemSerializer, ManagerSerializer, CartSerializer, OrderSerializer, CategorySerializer
import datetime


currentDate = datetime.datetime.now().date()




## Category
class CategoryView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsManagerOnly]

class SingleCategoryView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsManagerOnly]




## Menu Item
# Class Model View
class MenuItemView(viewsets.ModelViewSet):
    
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

    def get_throttles(self):
        if self.request.user.groups.filter(name='Manager').exists():
            throttle_classes = []
        else:
            throttle_classes = [UserRateThrottle, AnonRateThrottle]
        return [throttle() for throttle in throttle_classes]
    
    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [IsAuthenticatedOrReadOnly]
        else:
            permission_classes = [IsManagerOnly]
        return [permission() for permission in permission_classes]


# functionBased
'''
@api_view(['GET','POST'])
@permission_classes([IsAuthenticatedOrReadOnly])
@throttle_classes([UserRateThrottle, AnonRateThrottle, ManagerThrottle])
def MenuItemView(request):
    if request.method =="GET":
        items = MenuItem.objects.all()
        serialized_item = MenuItemSerializer(items, many=True)
        return Response(serialized_item.data)

    elif request.method == 'POST':
        if request.user.groups.filter(name='Manager').exists():
            item = MenuItemSerializer(data= request.data)
            item.is_valid()
            item.save()
            return Response(item.data)
        else: 
            return Response({'message':'You do not have the permission to add!'})

@api_view(['GET','PUT', 'PATCH', 'DELETE'])
@permission_classes([IsAuthenticated])
@throttle_classes([UserRateThrottle])
def SingleMenuItemView(request, pk):
    if request.method =="GET":
        items = get_object_or_404(MenuItem, pk=pk)
        serialized_item = MenuItemSerializer(items)
        return Response(serialized_item.data)
    
    elif request.method == 'DELETE':
        if request.user.groups.filter(name='Manager').exists():
            items = MenuItem.objects.filter(id = pk).delete()
            return Response({'status': 'Item has been deleted!'})
        else: 
            return Response({'message': 'You do not have the permission to delete item!'})
        
    elif request.method == 'PUT':
        if request.user.groups.filter(name='Manager').exists():
            items = MenuItem.objects.get(id = pk)
            data = request.data

            if data['title']:
                items.title = data['title']
            if data['price']:
                items.price = data['price']
            if data['featured']:
                items.featured = data['featured']
                
            if data.get('category_id'):
                items.category_id = data.get('category_id')
            items.save()
            serialized_item = MenuItemSerializer(items)
            return Response(serialized_item.data)
        else: 
            return Response({'message': 'You do not have the permission to update item!'})
'''


## group management
# manager group
#class-based
class ManagerGroupViewClass(viewsets.ViewSet):
    permission_classes = [IsManagerOnly]
    throttle_classes = []
    def list(self, request):
        managers = User.objects.filter(groups=2)
        serialized_item = ManagerSerializer(managers, many = True)
        return Response(serialized_item.data)
    
    def create(self, request):
        username = request.data['username']
        user = get_object_or_404(User, username=username)
        manager = Group.objects.get(name='Manager')
        manager.user_set.add(user)
        return Response({'message': 'add to the manager group successfully'})

    def destroy(self, request, pk):
        user = get_object_or_404(User, pk=pk)
        group = Group.objects.get(name = 'Manager')
        group.user_set.remove(user)
        return Response({'message': 'Deleted from manager group!'})
        

## Delivery Crew Group
# Class-Based

class DeliveryGroupModelView(viewsets.ViewSet):
    permission_classes = [IsManagerOnly]
    throttle_classes = []
    def list(self, request):
        managers = User.objects.filter(groups=1)
        serialized_item = ManagerSerializer(managers, many = True)
        return Response(serialized_item.data)
    
    def create(self, request):
        username = request.data['username']
        user = get_object_or_404(User, username=username)
        manager = Group.objects.get(name='Delivery Crew')
        manager.user_set.add(user)
        return Response({'message': 'add to the Delivery Crew group successfully'})

    def destroy(self, request, pk):
        user = get_object_or_404(User, pk=pk)
        group = Group.objects.get(name = 'Delivery Crew')
        group.user_set.remove(user)
        return Response({'message': 'Deleted from Delivery Crew group!'})





## Cart Management
@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([IsAuthenticated])
@throttle_classes([UserRateThrottle])
def CartView(request):
    userId = request.user.id
    username = request.user.username
    if request.method == 'GET':
        cart = get_object_or_404(Cart, user = userId)
        serialized_cart = CartSerializer(cart)
        return Response(serialized_cart.data)
    
    elif request.method == 'POST':
        user = User.objects.get(username=username)
        menuitem = MenuItem.objects.get(title = request.data['menuitem'])
        unit_price = menuitem.price
        quantity = request.data['quantity']
        price = int(quantity) * float(unit_price)
        cart = Cart(user=user,menuitem=menuitem,unit_price=unit_price,price=price,quantity=quantity)
        cart.save()
        serialized_cart = CartSerializer(cart)
        return Response(serialized_cart.data)    
        
    elif request.method == 'DELETE':
        cart = Cart.objects.filter(user=userId).delete()
        return Response({'status': 'Cart has been wiped out!'})
    
    
    

## Order section
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
@throttle_classes([UserRateThrottle])
def OrderView(request):
    user = request.user
    if user.groups.filter(name = 'Manager').exists():
        if request.method == 'GET':
            orders = Order.objects.all()
            serialized_order = OrderSerializer(orders, many = True)
            return Response(serialized_order.data)
        
    elif user.groups.filter(name='Delivery Crew').exists():
        if request.method == 'GET':
            orders = get_list_or_404(Order, delivery_crew=user.id)
            serialized_order = OrderSerializer(orders, many = True)
            return Response(serialized_order.data)
    
    else:
        if request.method == 'GET':
            orders = get_list_or_404(Order,user= user.id)
            serialized_order = OrderSerializer(orders, many=True)
            return Response(serialized_order.data)
        elif request. method == "POST":
            user = User.objects.get(id = user.id)
            cart = get_object_or_404(Cart, user = user)
            orders = Order(user=user, status=False, total = cart.price, date = currentDate)
            orders.save()
            order_item_user = get_list_or_404(Order,user = user)
            for user in order_item_user:
                orderItem = OrderItem(order=user, menuitem=cart.menuitem, quantity = cart.quantity, 
                                  unit_price = cart.unit_price, price = cart.price)
            orderItem.save()
            cart.delete()
            return Response({'status': 'Order has been placed!'})
        

@api_view(['GET','DELETE','PUT', 'PATCH'])
@permission_classes([IsAuthenticated])
@throttle_classes([UserRateThrottle])
def SingleOrderView(request,pk):
    user = request.user
    order = get_object_or_404(Order, id =pk)

    if user.groups.filter(name='Manager').exists():
        if request.method == "DELETE":
            order.delete()
            return Response({'status': 'Order has been deleted!'})
        elif request.method == 'PUT' or request.method == 'PATCH':
            delivery_crew = get_object_or_404(User, username = request.data['username'])
            if delivery_crew:
                order.delivery_crew = delivery_crew
            if request.data['status']:
                order.status = request.data['status']
            order.save()
            serializer_order = OrderSerializer(order)
            return Response(serializer_order.data)

    elif user.groups.filter(name='Delivery Crew').exists():
        if request.method == 'GET':
            order_crew = get_object_or_404(Order, delivery_crew=user.id)
            serializer_order = OrderSerializer(order_crew)
            return Response(serializer_order.data)
        
        elif request.method == 'PATCH':
            order.status = request.data['status']
            order.save()
            serializer_order = OrderSerializer(order)
            return Response(serializer_order.data)
        
    else:
        if request.method == 'GET':
            serializer_order = OrderSerializer(order)
            return Response(serializer_order.data)
        else:
            return Response({'status': 'only GET method is for user'})