import { Link, useNavigate } from "react-router-dom"
import { createPlayerAccount, signInAccount } from '../../lib/appwrite/api'
import { message } from "antd"
import { usePlayerContext } from "../../hooks/usePlayer"

import { Button, Form, Input, Spin } from 'antd'

const SignUpForm = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage()
  const { checkAuthPlayer, isLoading } = usePlayerContext()

  const onFinish = async (values) => {

    try {
      console.log('Success:', values)
      // create new User
      const newPlayer = await createPlayerAccount(values)

      if (!newPlayer) {
        messageApi.error("Votre inscription a échoué. Merci d'essayer à nouveau")
        return
      }

      const session = await signInAccount({
        email: values.email,
        password: values.password
      })

      if (!session) {
        messageApi.error("Echec de connexion. Merci d'essayer à nouveau")
        navigate("/sign-in")
        return
      }

      const isLoggedIn = await checkAuthPlayer()

      if (isLoggedIn) {
        form.resetFields()
        messageApi.info("Vous êtes connecté!")
        navigate('/')
      } else {
        messageApi.error("Votre inscription a échoué. Merci d'essayer à nouveau")
        return
      }

    } catch (error) {
      console.log("error", error)
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
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Entrer votre nom d'utilisateur!",
          },
        ]}
      >
        <Input placeholder="Nom d'utilisateur" />
      </Form.Item>

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
        <p>
          Pas de compte ?
          <Link
            to="/sign-up"

          >
            {" "}Enregistre toi!!
          </Link>
        </p>
      </Form.Item>
      {contextHolder}
    </Form>
  )
}

export default SignUpForm
