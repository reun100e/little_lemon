from django.urls import path
from . import views
from .views import MenuItemsView, SingleMenuItemView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path("", views.index, name="index"),
    path("menu-items/", MenuItemsView.as_view(), name="menu"),
    path("menu-items/<int:pk>/", SingleMenuItemView.as_view(), name="single-menu"),
    path('api-token-auth/', obtain_auth_token)
]
