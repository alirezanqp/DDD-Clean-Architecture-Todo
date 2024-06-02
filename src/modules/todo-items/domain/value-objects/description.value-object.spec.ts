import { Description } from './description.value-object';

describe('Description', () => {
  it('should create a valid Description object', () => {
    const description = new Description({ value: 'A valid description' });

    expect(description.unpack().value).toBe('A valid description');
  });

  it('should throw an error if description is less than 3 characters', () => {
    expect(() => {
      new Description({ value: 'Hi' });
    }).toThrow(Description.INVALID_LENGTH);
  });

  it('should throw an error if description is more than 100 characters', () => {
    const longString = 'a'.repeat(101);
    expect(() => {
      new Description({ value: longString });
    }).toThrow(Description.INVALID_LENGTH);
  });

  it('should throw an error if description is not a string', () => {
    expect(() => {
      new Description({ value: 123 as any });
    }).toThrow(Description.INVALID_TYPE);
  });

  it('should throw an error if description is null or undefined', () => {
    expect(() => {
      new Description({ value: null as any });
    }).toThrow(Description.INVALID_LENGTH);

    expect(() => {
      new Description({ value: undefined as any });
    }).toThrow(Description.INVALID_LENGTH);
  });
});
