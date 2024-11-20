import { RemoteApp } from '~/remote-apps';
import * as styles from './styles.css';

export const App = () => {
  return (
    <main className={styles.hostApp}>
      <h1>Host</h1>
      <RemoteApp />
    </main>
  );
};
