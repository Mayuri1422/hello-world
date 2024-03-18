export class CourseService
{
    private course:string[]=['Core Java','Advanced Java','Angular12','Javascript','MySql'];

    getCourse()
    {
        return this.course;
    }
}