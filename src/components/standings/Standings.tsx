import styles from "./Standings.module.scss";

interface Props {
  teams: {
    name: string;
    victories: number;
    draws: number;
    losses: number;
    forfeits: number;
  }[];
}

export function getSeasonYears(): string {
  const today = new Date();
  const currentYear = today.getFullYear();

  // Assuming the season starts in August
  const seasonStartYear = today.getMonth() >= 7 ? currentYear : currentYear - 1;
  const seasonEndYear = seasonStartYear + 1;

  return `${seasonStartYear}-${seasonEndYear}`;
}

function calculatePoints(team: any): number {
  const victoryPoints = 6;
  const drawPoints = 3;
  const lossPoints = 1;
  const forfeitPointsFirst = -3;
  const forfeitPointsSubsequent = -6;

  const totalVictoryPoints = team.victories * victoryPoints;
  const totalDrawPoints = team.draws * drawPoints;
  const totalLossPoints = team.losses * lossPoints;

  const forfeitCount = team.forfeits;
  const totalForfeitPoints =
    forfeitCount === 0
      ? 0
      : forfeitCount === 1
      ? forfeitPointsFirst
      : forfeitPointsFirst + (forfeitCount - 1) * forfeitPointsSubsequent;

  return totalVictoryPoints + totalDrawPoints + totalLossPoints + totalForfeitPoints;
}

function Standings({ teams }: Props) {
  // Calculate points for each team
  const teamsWithCalculatedPoints = teams.map((team) => ({
    ...team,
    points: calculatePoints(team),
  }));

  // Sort the teams array by points in descending order
  teamsWithCalculatedPoints.sort((a, b) => b.points - a.points);

  const seasonYears = getSeasonYears();

  return (
    <div className={styles.standings}>
      <h1 className={styles.title}>
        <span className={styles.line}>Classement</span>
        <span className={styles.line}>{seasonYears}</span>
      </h1>
      <table>
        <thead>
          <tr>
            <th>Équipes</th>
            <th>V</th>
            <th>N</th>
            <th>D</th>
            <th>F</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teamsWithCalculatedPoints.map((team) => (
            <tr key={team.name}>
              <td>{team.name}</td>
              <td>{team.victories}</td>
              <td>{team.draws}</td>
              <td>{team.losses}</td>
              <td>{team.forfeits}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Standings;