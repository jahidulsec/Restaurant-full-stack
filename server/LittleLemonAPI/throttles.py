from rest_framework.throttling import UserRateThrottle, BaseThrottle

class ManagerThrottle(UserRateThrottle):
    scope = 'manager'
