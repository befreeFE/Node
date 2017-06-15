import student from '../../models/v1/student'
import formidable from 'formidable'

class Student {
    constructor() {
        this.getStudent = this.getStudent.bind(this);
        this.addStudent = this.addStudent.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    async getStudent(req, res, next) {
        await student.find({}, function (err, docs) {
            /*对docs进行操作*/
            res.send(docs);
        });
    }

    async addStudent(req, res, next) {

        const form = new formidable.IncomingForm();

        form.parse(req, async (err, fields, files) => {

            var beta = new student({
                name: fields.name,
                phone: fields.phone,
            });
            beta.save(function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('存入成功');
                }
            });
        });

    }

    async updateStudent(req, res, next) {

        const form = new formidable.IncomingForm();

        form.parse(req, async (err, fields, files) => {

            student.update({
                _id: fields._id
            }, {
                    name: fields.name,
                    phone: fields.phone,
                }, function (error) { });
        });

    }

    async deleteStudent(req, res, next) {

        const form = new formidable.IncomingForm();

        form.parse(req, async (err, fields, files) => {

            student.remove({
                _id: fields._id
            }, function (err) {
                if (err) return handleError(err);
                // removed!
            });
        });

    }

}

export default new Student();