function totalVotes(candidate: Candidate): number {
  let total = 0;
  for (const vote of candidate.votes) {
    total += vote;
  }

  return total;
}

function totalCount(candidate: Array<Candidate>): number {
  let total = 0;
  for (const name of candidate) {
    total += totalVotes(name);
  }

  return total;
}

function percentage(candidates: Array<Candidate>, candidate: Candidate): number {
  const result = (totalVotes(candidate) / totalCount(candidates)) * 100;
  return result;
}

function eachPrecinct(candidate: Candidate, precinct: number): number {
  return candidate.votes[precinct];
}

function totalPrecinct(candidate: Array<Candidate>, precinct: number): number {
  let total = 0;
  for (const name of candidate) {
    total += eachPrecinct(name, precinct);
  }
  return total;
}

function spent(candidate: Candidate): number {
  const amount = candidate.funding / totalVotes(candidate);

  return amount;
}

export { totalVotes, totalCount, percentage, eachPrecinct, totalPrecinct, spent };
