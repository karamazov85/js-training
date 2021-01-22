// Translate RNA sequences into proteins.

// RNA can be broken into three nucleotide sequences called codons, and then translated to a polypeptide like so:

// RNA: "AUGUUUUCU" => translates to

// Codons: "AUG", "UUU", "UCU" => which become a polypeptide with the following sequence =>

// Protein: "Methionine", "Phenylalanine", "Serine"

// There are 64 codons which in turn correspond to 20 amino acids; however, all of the codon sequences and resulting amino acids are not important in this exercise. If it works for one codon, the program should work for all of them. However, feel free to expand the list in the test suite to include them all.

// There are also three terminating codons (also known as 'STOP' codons); if any of these codons are encountered (by the ribosome), all translation ends and the protein is terminated.

// All subsequent codons after are ignored, like this:

// RNA: "AUGUUUUCUUAAAUG" =>

// Codons: "AUG", "UUU", "UCU", "UAA", "AUG" =>

// Protein: "Methionine", "Phenylalanine", "Serine"

// Note the stop codon "UAA" terminates the translation and the final methionine is not translated into the protein sequence.

// Below are the codons and resulting Amino Acids needed for the exercise.

// Codon	Protein
// AUG	Methionine
// UUU, UUC	Phenylalanine
// UUA, UUG	Leucine
// UCU, UCC, UCA, UCG	Serine
// UAU, UAC	Tyrosine
// UGU, UGC	Cysteine
// UGG	Tryptophan
// UAA, UAG, UGA	STOP


export const translate = rna => {
  const proteinLUT = {
    AUG: "Methionine",
    UUU: "Phenylalanine",
    UUC: "Phenylalanine",
    UUA: "Leucine",
    UUG: "Leucine",
    UCU: "Serine",
    UCU: "Serine",
    UCA: "Serine",
    UCG: "Serine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
    UGU: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan"
  };

  if (!rna) {
    return [];
  }
  const codons = rna.match(/.{1,3}/g); // this is the problem. returns an empty array if RNA is only 1-codon length

  codons.forEach(codon => {
    if (
      !proteinLUT[codon] &&
      (codon !== "UAA" && codon !== "UAG" && codon !== "UGA")
    )
      throw "Invalid codon";
  });

  const allProteins = codons.map(codon => proteinLUT[codon] || "STOP");
  const cutOffIndex = allProteins.indexOf("STOP");
  const proteins = allProteins.slice(0, cutOffIndex);
  return proteins;
};
