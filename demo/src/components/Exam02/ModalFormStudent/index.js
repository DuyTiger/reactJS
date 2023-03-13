import { Input, Modal, Form } from "antd";
import { useEffect } from "react";

const Exam02 = (props) => {

    const [form] = Form.useForm()


    useEffect(() => {
        if(!props.open) {
            form.resetFields()
        }
    }, [props.open])

    const onSubmit = () => {
        const data = form.getFieldValue()
        props.onSubmit(data, props.formData.id)
        
    }
  const onCancel = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <div>
        <Modal open={props.open} onOk={onSubmit} onCancel={onCancel}>
          <Form form={form}  layout="vertical">
            <Form.Item name="name" label="Ho & Ten:">
              <Input value={props.formData.name} onChange={props.onChange} />
            </Form.Item>

            <Form.Item name="studentID" label="Ma so hs:">
              <Input value={props.formData.studentID}  onChange={props.onChange}/>
            </Form.Item>
            
            <Form.Item name="score" label="Diem So:">
              <Input value={props.formData.score} onChange={props.onChange} />
            </Form.Item>

            <Form.Item name="class" label=" Lop:">
              <Input value={props.formData.class} onChange={props.onChange} />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Exam02;
