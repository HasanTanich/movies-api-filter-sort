import { MovieFromGenre } from '../types/MovieFromGenre';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function sumNestedArray(arr: any[]) : number {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += sumNestedArray(arr[i]);
    } else if (typeof arr[i] === 'number') {
      sum += arr[i];
    }
  }
  return sum;
}

export function chunkArray(arr: any[], size: number): any[] {
  if (arr.length === 0 || size <= 0) {
    return [];
  }

  const result: any[] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export function sortData(data: MovieFromGenre[], sortKey: keyof MovieFromGenre, desc = true): MovieFromGenre[] {
  
  return data.sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];
  
    if (desc) {
      return aValue < bValue ? 1 : -1;
    } else {
      return aValue > bValue ? 1 : -1;
    }
  });
}