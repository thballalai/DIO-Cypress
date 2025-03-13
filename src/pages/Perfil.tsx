import gitApi from "../api/github";
import Layout from "../components/Layout/Layout";
import Table from "../components/Table/Table";
import { useParams, useHistory } from "react-router-dom";

const Perfil = () => {

  const history = useHistory();
  const { user } = useParams<{ user: string }>();

  const cursos = [
    {
      tech: 'React',
      tipo: 'Frontend'
  },
  {
      tech: 'Angular',
      tipo: 'Frontend'
  },
  {
      tech: 'Node',
      tipo: 'Frontend'
  }
  ]

  gitApi.getUser(user)
  .then(response => console.log(response))
  .catch(error => {
    console.log(error);
    history.push('/');
  })

  return (
    <Layout>
      <Table data={cursos}/>
    </Layout>
  );
}

export default Perfil;