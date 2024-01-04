import useForm from './UseForm'

export default function Form2() {
  const [formData, setFormData] = useForm({
    password: '',
    color: '#FF0000'
  });

  return (
    <form>
      password: <input name="password" type="password" value={formData.password} onChange={setFormData}/>
      color: <input name="color" type="color" value={formData.color} onChange={setFormData} />
    </form>
  );
}
