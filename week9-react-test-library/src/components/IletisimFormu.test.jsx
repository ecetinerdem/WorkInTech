import { afterEach, beforeEach, expect, test } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import fs from 'fs';
import path from 'path';
import IletisimFormu from './IletisimFormu';

//eksik import buraya
//fixin tuzağı buraya? detaylar readme dosyasında.
beforeEach(() => {
  render(<IletisimFormu />);
});

test('[1] hata olmadan render ediliyor', () => {
  render(<IletisimFormu />);
});

test('[2] iletişim formu headerı render ediliyor', () => {
  const header = screen.getByText(/İletişim Formu/i);
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).toHaveTextContent('İletişim Formu');
});

test('[3] kullanıcı adını 5 karakterden az girdiğinde BİR hata mesajı render ediyor.', async () => {
  const nameInput = screen.getByLabelText(/Ad*/);
  fireEvent.change(nameInput, { target: { value: 'abc' } });
  const errorMessages = await screen.findAllByTestId('error');
  expect(errorMessages).toHaveLength(1);
});

test('[4] kullanıcı inputları doldurmadığında ÜÇ hata mesajı render ediliyor.', async () => {
  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);
  const errorMessages = await screen.findAllByTestId('error');
  expect(errorMessages).toHaveLength(3);
});

test('[5] kullanıcı doğru ad ve soyad girdiğinde ama email girmediğinde BİR hata mesajı render ediliyor.', async () => {
  const nameInput = screen.getByTestId('name-input');
  const surnameInput = screen.getByTestId('lastName-input');
  fireEvent.change(nameInput, { target: { value: 'Mahmut' } });
  fireEvent.change(surnameInput, { target: { value: 'Arslan' } });

  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  const errorMessages = await screen.findAllByTestId('error');
  expect(errorMessages).toHaveLength(1);
});

test('[6] geçersiz bir mail girildiğinde "Hata: email geçerli bir email adresi olmalıdır." hata mesajı render ediliyor', async () => {
  const emailInput = screen.getByTestId('email-input');
  fireEvent.change(emailInput, { target: { value: 'gecersizMail' } });

  const errorMessage = await screen.findByTestId('error');
  expect(errorMessage).toHaveTextContent(
    'Hata: email geçerli bir email adresi olmalıdır.'
  );
});

test('[7] soyad girilmeden gönderilirse "Hata: soyad gereklidir." mesajı render ediliyor', async () => {
  const nameInput = screen.getByTestId('name-input');
  fireEvent.change(nameInput, { target: { value: 'Mahmut' } });
  const emailInput = screen.getByTestId('email-input');
  fireEvent.change(emailInput, { target: { value: 'mahmutarslan@gmail.com' } });

  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  const errorMessage = await screen.findByText('Hata: soyad gereklidir.');
  expect(errorMessage).toBeInTheDocument();
});

test('[8] ad, soyad, email render ediliyor. mesaj bölümü doldurulmadığında hata mesajı render edilmiyor.', async () => {
  const nameInput = screen.getByTestId('name-input');
  fireEvent.change(nameInput, { target: { value: 'Mahmut' } });

  const surnameInput = screen.getByTestId('lastName-input');
  fireEvent.change(surnameInput, { target: { value: 'Arslan' } });

  const emailInput = screen.getByTestId('email-input');
  fireEvent.change(emailInput, { target: { value: 'mahmutarslan@gmail.com' } });

  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  const errorMessages = screen.queryAllByTestId('error');
  expect(errorMessages).toHaveLength(0);
});

test('[9] form gönderildiğinde girilen tüm değerler render ediliyor.', async () => {
  const nameInput = screen.getByTestId('name-input');
  fireEvent.change(nameInput, { target: { value: 'Mahmut' } });

  const surnameInput = screen.getByTestId('lastName-input');
  fireEvent.change(surnameInput, { target: { value: 'Arslan' } });

  const emailInput = screen.getByTestId('email-input');
  fireEvent.change(emailInput, { target: { value: 'mahmutarslan@gmail.com' } });

  const messageInput = screen.getByTestId('message-input');
  fireEvent.change(messageInput, { target: { value: 'Bir derdim var' } });

  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);
  screen.debug();
  expect(screen.getByText('Mahmut')).toBeInTheDocument();
  expect(screen.getByText('Arslan')).toBeInTheDocument();
  expect(screen.getByText('mahmutarslan@gmail.com')).toBeInTheDocument();
  expect(screen.getByText('Bir derdim var')).toBeInTheDocument();
});

//

//

// BURADAN SONRASINA DOKUNMAYIN //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const testFile = fs
  .readFileSync(path.resolve(__dirname, './IletisimFormu.test.jsx'), 'utf8')
  .replaceAll(/(?:\r\n|\r|\n| )/g, '');
const tests = testFile.split("test('[");

test('Kontrol: IletisimFormu componenti import edilmiş.', async () => {
  expect(tests[0]).toContain('importIletisimFormufrom');
});

test('Kontrol: test[1] için render metodu kullanılmış', async () => {
  expect(tests[1]).toContain('render(<IletisimFormu');
});

test('Kontrol: test[2] için screen.getByText(...) kullanılmış', async () => {
  expect(tests[2]).toContain('screen.getByText(');
});

test('Kontrol: test[2] için .toBeInTheDocument() ile kontrol edilmiş', async () => {
  expect(tests[2]).toContain('.toBeInTheDocument()');
});

test('Kontrol: test[2] için .toBeTruthy() ile kontrol edilmiş', async () => {
  expect(tests[2]).toContain('.toBeTruthy()');
});

test('Kontrol: test[2] için .toHaveTextContent(...) ile kontrol edilmiş', async () => {
  expect(tests[2]).toContain('.toHaveTextContent(');
});

test('Kontrol: test[3] için screen.getByLabelText(...) kullanılmış', async () => {
  expect(tests[3]).toContain('screen.getByLabelText(');
});

test('Kontrol: test[3] için screen.findAllByTestId(...) kullanılmış', async () => {
  expect(tests[3]).toContain('screen.findAllByTestId(');
});

test('Kontrol: test[3] için findAllByTestId await ile kullanılmış', async () => {
  expect(tests[3]).toContain('awaitscreen.findAllByTestId');
});

test('Kontrol: test[3] için .toHaveLength(...) ile kontrol edilmiş', async () => {
  expect(tests[3]).toContain('.toHaveLength(1)');
});

test('Kontrol: test[4] için .getByRole(...) kullanılmış ', async () => {
  expect(tests[4]).toContain('screen.getByRole(');
});

test('Kontrol: test[4] için .toHaveLength(...) ile kontrol edilmiş', async () => {
  expect(tests[4]).toContain('.toHaveLength(3)');
});

test('Kontrol: test[5] için .getByTestId(...) kullanılmış', async () => {
  expect(tests[5]).toContain('screen.getByTestId(');
});

test('Kontrol: test[5] için .toHaveLength(...) ile kontrol edilmiş', async () => {
  expect(tests[5]).toContain('.toHaveLength(1)');
});

test('Kontrol: test[6] için .getByTestId(...) kullanılmış', async () => {
  expect(tests[6]).toContain('screen.getByTestId(');
});

test('Kontrol: test[6] için .toHaveTextContent(...) ile kontrol edilmiş', async () => {
  expect(tests[6]).toContain(').toHaveTextContent(');
});

test('Kontrol: test[7] için .findByText(...) await ile kullanılmış', async () => {
  expect(tests[7]).toContain('awaitscreen.findByText(');
});

test('Kontrol: test[7] için .toBeInTheDocument() ile kontrol edilmiş', async () => {
  expect(tests[7]).toContain(').toBeInTheDocument()');
});

test('Kontrol: tüm testlerde(test1 hariç) iletişim formu ayrı ayrı render edilmesi yerine beforeEach hooku kullılarak, render içinde yapılmış.', async () => {
  expect(tests[0]).toContain('beforeEach(()=>{');
  expect(tests[0]).toContain('render(<IletisimFormu/>)');
});
