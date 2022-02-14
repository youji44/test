import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

global.MediaRecorder = () => {};

test('UI', async () => {
  let { findByText, findByLabelText } = render(<App />);

  expect(await findByText(/select video source/i)).toBeVisible();
  expect(await findByLabelText(/screen/i)).toBeVisible();
  expect(await findByLabelText(/screen/i)).toHaveAttribute('type', 'radio');
  expect(await findByLabelText(/camera/i)).toBeVisible();
  expect(await findByLabelText(/camera/i)).toHaveAttribute('type', 'radio');
  expect(await findByLabelText(/enable microphone/i)).toBeVisible();
  expect(await findByLabelText(/enable microphone/i)).toHaveAttribute(
    'type',
    'checkbox'
  );
  expect(await findByLabelText(/enable microphone/i)).not.toBeChecked();
  expect(
    await findByText(/start recording/i, { selector: 'button' })
  ).toBeVisible();
});
