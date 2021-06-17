from django.shortcuts import redirect


def move_to_api(request):
    return redirect("api/")
