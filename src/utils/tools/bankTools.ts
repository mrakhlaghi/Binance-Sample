import banks from './banks';

export const validateIBAN = (accountNumber): boolean => {
  // Check Chartacters
  if (!/^IR\d{24}$/.test(accountNumber)) return false;

  const code = accountNumber.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/); // Match And Capture (0) The Country Code, (1) The Check Digits, And (3) The Rest

  // Check Syntax And Length
  if (!code) return false;

  function mod97(string) {
    let checksum = string.slice(0, 2);
    let fragment;

    for (let offset = 2; offset < string.length; offset += 7) {
      fragment = String(checksum) + string.substring(offset, offset + 7);
      checksum = parseInt(fragment, 10) % 97;
    }

    return checksum;
  }

  // // Rearrange country Code & Check Digits, Convert Chars To Ints
  const digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, (letter) => {
    return letter.charCodeAt(0) - 55;
  });

  // // Final Check
  return mod97(digits) === 1;
};

export interface IBankInfo {
  name: string;
  name_farsi: string;
  icon: string;
  iban_nbc: string;
  pan_iin: string[];
}

export const findBankByIBAN = (accountNumber: string): IBankInfo | undefined => {
  accountNumber = String(accountNumber); // Make Sure Working With Is String

  // Check Characters
  if (!/^IR[\d*]+$/.test(accountNumber) || accountNumber.length < 7) return undefined;

  const nationalBankCode = accountNumber.slice(4, 7); // Extract Issuer Identification Number
  // Check If nationalBankCode Was Cached
  const bank = banks.banks.find((bank) => bank.iban_nbc === nationalBankCode);

  if (!bank) return undefined;

  return bank;
};
