import styles from './Standings.module.scss';

interface Props {
  teams: {
    name: string;
    victories: number;
    draws: number;
    defeats: number;
    points: number;
  }[];
}

function Standings({ teams }: Props) {
    // Sort the teams array by points in descending order
    teams.sort((a, b) => b.points - a.points);
  
    return (
      <div className={styles.standings}>
        <h1>Classement</h1>
        <table>
          <thead>
            <tr>
              <th>Équipes</th>
              <th>V</th>
              <th>N</th>
              <th>D</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.name}>
                <td>{team.name}</td>
                <td>{team.victories}</td>
                <td>{team.draws}</td>
                <td>{team.defeats}</td>
                <td>{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default Standings;