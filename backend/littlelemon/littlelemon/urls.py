"""
URL configuration for littlelemon project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from restaurant import views

from rest_framework import routers

router1 = routers.DefaultRouter()
router1.register(r"users", views.UserViewSet)

router2 = routers.DefaultRouter()
router2.register(r"tables", views.BookingViewSet)

urlpatterns = [
    # path("", views.index, name="index"),
    path("", include(router1.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("admin/", admin.site.urls),
    path("api/", include("restaurant.urls")),
    path("restaurant/booking/", include(router2.urls)),
    # Djoser url paths
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.authtoken")),
]
