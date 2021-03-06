import request from '@/utils/request'
export default {
    // 1. 添加课程信息
    addCourseInfo(courseInfo) {
        return request({
            url: '/eduservice/course/addCourseInfo',
            method: 'post',
            data: courseInfo
        })
    },

    // 2. 获取所有讲师
    getAllTeacher() {
        return request({
            url: '/eduservice/teacher/findAll',
            method: 'get'
        })
    },

    // 3. 获取课程基本信息 by 课程 id
    getCourseInfoById(id) {
        return request({
            url: `/eduservice/course/getCourseInfo/${id}`,
            method: 'get'
        })
    },

    // 4. 修改课程信息
    updateCourseInfo(courseInfo) {
        return request({
            url: '/eduservice/course/updateCourseInfo',
            method: 'post',
            data: courseInfo,
        })
    },

    // 5. 课程最终发布确认信息
    getPublishCourseInfo(courseId) {
        return request({
            url: `/eduservice/course/getPublishCourseInfo/${courseId}`,
            method: 'get',
        })
    },

    // 6. 课程最终发布
    publishCourse(courseId) {
        return request({
            url: `/eduservice/course/publishCourse/${courseId}`,
            method: 'post',
        })
    },

    /**
     * 课程列表, 分页带查询
     * @param {*} current 当前页
     * @param {*} limit 每页记录数
     * @param {*} courseQuery 条件查询对象 
     */
    pageCourseCondition(current, limit, courseQuery) {
        return request({
            url: `/eduservice/course/pageCourseCondition/${current}/${limit}`,
            method: 'post',
            data: courseQuery
        })
    },

    // 8. 删除课程信息（以及关联的小节，章节，课程描述）
    deleteCourse(courseId) {
        return request({
            url: `/eduservice/course/deleteCourse/${courseId}`,
            method: 'delete'
        })
    },


}