from django.urls import path
from . import views
from .views import MenuItemsView, SingleMenuItemView, BookingView

urlpatterns = [
    path("", views.index, name="index"),
    path("menu/", MenuItemsView.as_view(), name="menu-items"),
    path("menu/<int:pk>/", SingleMenuItemView.as_view(), name="single-menu-item"),
    path("booking/", BookingView.as_view()),
]
