import requests
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import City
from .serializers import CitySerializer

class WeatherView(APIView):
    def get(self, request, city_name):
        api_key = "a4aa5e3d83ffefaba8c00284de6ef7c3"  # Replace with your OpenWeatherMap API key
        weather_api_url = f"http://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={api_key}&units=metric"

        response = requests.get(weather_api_url)
        if response.status_code == 200:
            return Response(response.json())
        else:
            return Response({"error": "City not found"}, status=404)
from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Welcome to the Weather App</h1>")
