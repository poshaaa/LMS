from django.urls import path
from . import views

urlpatterns = [
#Преподаватели
    path('teacher/', views.TeacherList.as_view()),
    path('teacher/<int:pk>/', views.TeacherDetail.as_view()),
    path('teacher-login', views.teacher_login),
#Категории
    path('category/',views.CategoryList.as_view()),
#Курсы
    path('course/',views.CourseList.as_view()),
    path('teacher-courses/<int:teacher_id>/',views.TeacherCourseList.as_view()),
    path('teacher-course-detail/<int:pk>/',views.TeacherCourseDetailList.as_view()),
#Материалы курса
    path('course-chapters/<int:course_id>',views.CourseChapterList.as_view()),
    path('chapter/<int:pk>',views.ChapterList.as_view()),
#Студент
    path('student/',views.StudentList.as_view()),
    path('student-login',views.student_login),
]