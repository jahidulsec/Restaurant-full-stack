from django.contrib import admin
from .models import MenuItem, Order, OrderItem, Category, Cart

# Register your models here.
@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ['id','title', 'price', 'featured', 'category']

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['slug','title']

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['user', 'delivery_crew', 'status', 'total', 'date']

@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ['order', 'menuitem', 'quantity', 'unit_price', 'price']
    
@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ['user', 'menuitem', 'quantity', 'unit_price', 'price']
