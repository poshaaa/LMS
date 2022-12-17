# Generated by Django 4.1.2 on 2022-12-14 18:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_student_facult_student_studylevel_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Chapter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150)),
                ('descriprion', models.TextField()),
                ('video', models.FileField(null=True, upload_to='chapter_videos/')),
                ('remarks', models.TextField(null=True)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.course')),
            ],
            options={
                'verbose_name': 'Материал курса',
                'verbose_name_plural': 'Материалы курса',
                'ordering': ['id'],
            },
        ),
    ]