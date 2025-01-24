import { isStopwatchRunning, getRunningTime } from './stopwatch';

describe('isStopwatchRunning', () => {
  test('should return false if the stopwatch has not started', () => {
    expect(isStopwatchRunning(null, [])).toBe(false);
    expect(isStopwatchRunning(0, [])).toBe(false);
  });

  test('should return true if started and the toggles length is even', () => {
    expect(isStopwatchRunning(Date.now(), [1, 2])).toBe(true);
    expect(isStopwatchRunning(Date.now(), [1, 2, 3, 4])).toBe(true);
  });

  test('should return false if started and the toggles length is odd', () => {
    expect(isStopwatchRunning(Date.now(), [1])).toBe(false);
    expect(isStopwatchRunning(Date.now(), [1, 2, 3])).toBe(false);
  });
});

describe('getRunningTime', () => {
  beforeAll(() => {
    jest.spyOn(global.Date, 'now').mockImplementation(() => new Date('2025-01-24T10:00:00Z').getTime());
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('should return 0 if the stopwatch has not started', () => {
    expect(getRunningTime(null, [])).toBe(0);
    expect(getRunningTime(0, [])).toBe(0);
  });

  test('should return elapsed time if toggles is empty', () => {
    const startTime = new Date('2025-01-24T09:00:00Z').getTime();
    expect(getRunningTime(startTime, [])).toBe(3600000);
  });

  test('should calculate total running time with pause and resume', () => {
    const startTime = new Date('2025-01-24T09:00:00Z').getTime();
    const toggles = [
      new Date('2025-01-24T09:15:00Z').getTime(),
      new Date('2025-01-24T09:30:00Z').getTime(),
    ];
    expect(getRunningTime(startTime, toggles)).toBe(2700000);
  });

  test('should include ongoing running time if not paused', () => {
    const startTime = new Date('2025-01-24T09:00:00Z').getTime();
    const toggles = [
      new Date('2025-01-24T09:15:00Z').getTime(),
      new Date('2025-01-24T09:30:00Z').getTime(),
      new Date('2025-01-24T09:45:00Z').getTime(),
    ];
    expect(getRunningTime(startTime, toggles)).toBe(1800000);
  });

  test('should calculate running time with multiple pause/resume intervals', () => {
    const startTime = new Date('2025-01-24T09:00:00Z').getTime();
    const toggles = [
      new Date('2025-01-24T09:10:00Z').getTime(),
      new Date('2025-01-24T09:20:00Z').getTime(),
      new Date('2025-01-24T09:30:00Z').getTime(),
      new Date('2025-01-24T09:50:00Z').getTime(),
    ];
    expect(getRunningTime(startTime, toggles)).toBe(1800000);
  });
});