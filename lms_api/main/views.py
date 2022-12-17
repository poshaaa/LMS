from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions
from .serializers import TeacherSerializer, CategorySerializer, CourseSerializer, StudentSerializer, ChapterSerializer
from . import models
from rest_framework import generics


class TeacherList(generics.ListCreateAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes = [permissions.IsAuthenticated]


class TeacherDetail(generics.RetrieveDestroyAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes = [permissions.IsAuthenticated]


@csrf_exempt
def teacher_login(request):
    email = request.POST['email']
    password = request.POST['password']
    teacherData = models.Teacher.objects.get(email=email, password=password)
    # try:
    #     teacherData = models.Teacher.objects.get(email=email, password=password)
    # except models.Teacher.DoesNotExist:
    #     teacherData = None
    if teacherData:
        return JsonResponse({'bool': True, 'teacher_id': teacherData.id})
    else:
        return JsonResponse({'bool': False})


class CategoryList(generics.ListCreateAPIView):
    queryset = models.CourseCategory.objects.all()
    serializer_class = CategorySerializer


class CourseList(generics.ListCreateAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer

    # def get_queryset(self):
    #     qs = super().get.queryset()
    #     if 'result' in self.request.GET:
    #         limit = int(self.request.GET['result'])
    #         qs = models.Course.objects.all().order_by('-id')[:limit]
    #     return qs


class ChapterList(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Chapter.objects.all()
    serializer_class = ChapterSerializer


class CourseChapterList(generics.ListAPIView):
    queryset = models.Chapter.objects.all()
    serializer_class = ChapterSerializer

    def get_queryset(self):
        course_id = self.kwargs['course_id']
        course = models.Course.objects.get(pk=course_id)
        return models.Course.objects.filter(course=course)


# Курс конкретного преподавателя
class TeacherCourseList(generics.ListCreateAPIView):
    serializer_class = CourseSerializer

    def get_queryset(self):
        teacher_id = self.kwargs['teacher_id']
        teacher = models.Teacher.objects.get(pk=teacher_id)
        return models.Course.objects.filter(teacher=teacher)


# Судент
class StudentList(generics.ListCreateAPIView):
    queryset = models.Student.objects.all()
    serializer_class = StudentSerializer
    # permission_classes = [permissions.IsAuthenticated]


@csrf_exempt
def student_login(request):
    email = request.POST['email']
    password = request.POST['password']
    studentData = models.Student.objects.get(email=email, password=password)
    # try:
    #     teacherData = models.Teacher.objects.get(email=email, password=password)
    # except models.Teacher.DoesNotExist:
    #     teacherData = None
    if studentData:
        return JsonResponse({'bool': True, 'student_id': studentData.id})
    else:
        return JsonResponse({'bool': False})


#
class TeacherCourseDetailList(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer
