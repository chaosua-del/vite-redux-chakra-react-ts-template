import { render } from '@testing-library/react';
import { describe, test } from 'vitest';

import { Main } from '@/pages';

describe('Testing Main page', () => {
  test('Should render main', () => {
    render(<Main />);
  });
});
