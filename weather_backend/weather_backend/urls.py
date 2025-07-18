"""
URL configuration for weather_backend project.

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
from django.http import HttpResponse  # Add this for a basic response

# A simple view for the root URL
def home(request):
    return HttpResponse("<h1>Welcome to the Weather App</h1>")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('weather.urls')),  # Your API app
    path('', home),  # Add this line for the root path
]

