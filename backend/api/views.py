from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.


def get_routes(request):
    routes = [
        "TBD",
    ]

    return JsonResponse(routes, safe=False)
