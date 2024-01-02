export const passwordRule = (value: string) => {
  return (
    /[a-z]/.test(value || "") && //EN AZ BİR KÜÇÜK HARF
    /[A-Z]/.test(value || "") && // EN AZ BİR BÜYÜK HARF
    /[0-9]/.test(value || "") // EN AZ BİR SAYI
  );
};

//kendimi tekrarlamamak için dışarı aldım.