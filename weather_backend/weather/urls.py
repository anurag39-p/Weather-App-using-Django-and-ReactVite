from django.urls import path
from .views import WeatherView

urlpatterns = [
    path('weather/<str:city_name>/', WeatherView.as_view(), name='weather'),
]
