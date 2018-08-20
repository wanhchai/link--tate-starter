// previous imports
import { Mutation } from 'react-apollo';
import { updatePageNameMutation } from '../graphql';

class Sidebar extends React.Component {
  render() {
    return (
      <Mutation mutation={updatePageNameMutation}>
        {updatePageName => (
          // outer div elements
          <li className='sidebar-item' onClick={() => updatePageName({ variables: { name: 'React'} })}>React</li>
          // other list items and outer div elements
        )}
      </Mutation>
    );
  }
}

export default Sidebar;
