from django.urls import path
from . import views



urlpatterns = [
    path('category/', views.CategoryView.as_view()),
    path('category/<int:pk>', views.SingleCategoryView.as_view()),
    path('menu-items/', views.MenuItemView.as_view(
        {'get': 'list', 'post': 'create'}
    )),
    path('menu-items/<int:pk>', views.MenuItemView.as_view(
        {'get':'retrieve', 'put':'update', 'delete': 'destroy'}
    )),
    path('groups/manager/users/', views.ManagerGroupViewClass.as_view(
        {'get': 'list', 'post': 'create'}
    )),
    path('groups/manager/users/<int:pk>', views.ManagerGroupViewClass.as_view(
        {'delete': 'destroy'}
    )),

    path('groups/delivery-crew/users/', views.DeliveryGroupModelView.as_view(
        {'get': 'list', 'post': 'create'}
    )),
    path('groups/delivery-crew/users/<int:pk>', views.DeliveryGroupModelView.as_view(
        {'delete': 'destroy'}
    )),
    path('cart/menu-items/', views.CartView),
    path('orders/', views.OrderView),
    path('orders/<int:pk>', views.SingleOrderView),
    path('users/<str:username>', views.SingleCategoryView.as_view()),
]
