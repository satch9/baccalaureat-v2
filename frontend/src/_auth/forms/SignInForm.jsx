import { Link, useNavigate } from "react-router-dom"
import { signInAccount } from '../../lib/appwrite/api'
import { message } from "antd"
import { usePlayerContext } from "../../hooks/usePlayer"

import { Button, Checkbox, Form, Input, Spin } from 'antd'


const SignInForm = () => {

  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage()
  const { checkAuthPlayer, isLoading } = usePlayerContext()

  const onFinish = async (values) => {
    console.log('Success:', values)
    const session = await signInAccount({
      email: values.email,
      password: values.password
    })
    if (!session) {
      messageApi.error("Echec de connexion. Merci d'essayer à nouveau")
      return
    }
    const isLoggedIn = await checkAuthPlayer()
    if (isLoggedIn) {
      form.resetFields()
      navigate('/')
    } else {
      messageApi.error("Votre connexion a échoué. Merci d'essayer à nouveau")
      return
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  return (

    <Form
      name="basic"
      form={form}
      wrapperCol={{
        span: 24,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="email"
        
        rules={[
          {
            required: true,
            message: "Entrer votre email!",
          },
        ]}
      >
        <Input placeholder="Email" type="email" />
      </Form.Item>

      <Form.Item

        name="password"
        rules={[
          {
            required: true,
            message: "Taper s'il vous plaît votre mot de passe!",
          },
        ]}
      >
        <Input.Password placeholder="Mot de passe" />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          span: 24,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 24,
        }}
      >
        <Button type="primary" htmlType="submit">
          {isLoading ? (
            <div className="flex-center gap-2">
              <Spin /> Chargement...
            </div>
          ) : (
            "Soumettre"
          )}
        </Button>

      </Form.Item>
      {contextHolder}
      <p style={{ color: "black" }}>
        Pas de compte ?
        <Link to={"/sign-up"} style={{ textDecoration: "none", color: "inherit", fontWeight: "bold" }}>
          {" "}Enregistre toi!!
        </Link>
      </p>
    </Form>



  )
}

export default SignInForm
