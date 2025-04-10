"use client";
import { Button } from "@heroui/button";
import link from "next/link";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function AboutMePage() {
  let facts: string[] = [
    "The Queen of England was a trained mechanic.",
    "Sudan has more pyramids than Egypt.",
    "Human circulatory system is 60K+ miles long.",
    "Bananas are berries.",
    "Sharks don't have bones.",
    "Australia is wider than the Moon.",
    "Ketchup was sold as medicine.",
    "Octupuses have three hearts.",
    "Shrimps have their hearts in their head.",
    "Bananas are radioactive.",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <h1 className={title()}>About Me</h1>
      <br />
      <Button
        className="bg-blue-400 text-2xl"
        onPress={() => {
          setFact(facts[Math.floor(Math.random() * facts.length)]);
        }}
      >
        Press For Facts
      </Button>

      <p>{fact}</p>
      <h3 className="text-center text-5xl">Soccer</h3>
      <div className="flex flex-wrap border-solid border-5 justify-center">
        <img
          alt="soccer"
          className="flex flex-wrap justify-center border-dotted border-5"
          src="https://static01.nyt.com/images/2020/09/25/sports/25soccer-nationalWEB1/merlin_177451008_91c7b66d-3c8a-4963-896e-54280f374b6d-jumbo.jpg?quality=75&auto=webp"
        />
        <p className="text-3xl text-center">
          I enjoy playing soccer in my spare time. It helps me relax and take a
          break from other work.
        </p>
        {/* <a href="https://mypersonalfootballcoach.com/free-individual-soccer-training-videos/#:~:text=Look%20no%20further%20as%20MyPersonalFootballCoach,which%20all%20soccer%20is%20based." className="flex flex-wrap justitfy-center  bg-lime-500 m-3 p-3" target="_blank">Link For Solo Soccer Training</a> */}
        <Button
          as={link}
          className="bg-red-500 text-black text-3xl"
          href="https://mypersonalfootballcoach.com/free-individual-soccer-training-videos/#:~:text=Look%20no%20further%20as%20MyPersonalFootballCoach,which%20all%20soccer%20is%20based."
          target="_blank"
        >
          Link for solo training.
        </Button>
        <br />
        <></>
        <img
          alt="Soccer Team"
          className="border-dotted border-5"
          src="/team.jpg"
        />
        <p className="text-3xl justify-center">
          This is a picture of my team in 8th grade.
        </p>

        {/* <a href="https://www.issaquahfc.org/" className="flex flex-wrap justitfy-center  bg-lime-500 m-3 p-3" target="_blank">Link to my current soccer club.</a> */}
        <Button
          as={link}
          className="bg-red-500 text-black text-3xl"
          href="https://www.issaquahfc.org/"
          target="_blank"
        >
          My Club Webpage
        </Button>
      </div>

      {/* this is a comment */}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
      <h3 className="text-center text-5xl">Karate</h3>
      <div className="flex flex-wrap border-solid border-5 justify-center">
        <img
          alt="karate"
          className="border-dotted border-5 flex flex-wrap"
          height="900"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAQDxIWFRUVFRUVFRYWFRcVFxUQFRcXFhYVFxUYHSggGBolGxYWITEiJSkrLi4uFyA1ODMtNygtLisBCgoKDg0OGhAQGi0lHyUtListLS0tLi0tLS0rLS0tLS0tListLSstMi0tLS4tLS0tLS0tLS0tLS0rLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAACAQUBAAAAAAAAAAAAAAAAAQcCAwQFBgj/xAA/EAACAQIDBgMFBgUDAwUAAAABAgADEQQSIQUGEzFBUSJhcQcygZGhFCNCUmKxcsHR4fCCk/FzotIWJDOywv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACkRAQEAAgEDAgQHAQAAAAAAAAABAhEDEiExIkEEcaHREyMyQpHB8AX/2gAMAwEAAhEDEQA/AIPhCEBxRxCARxRwCEIQEI4CEAhCEAhCOAo4QlChCEgcIQgEUcIBCEICMIGEAhHGFgUwlSoSbCUwEY4QgEUDCAQgYQCKOEAhCEBxRwgKOKOAQhCACEBCARxRwFHCIQHLlOiT0lqd1srdp61KnWplLHNlUnVsvPXl8/nykt01jjcvDHwO4OJqorq9HUXAJY/AkLoZzO1cA+HrVKNRcrIbEc9DqCD1BBBBk3YLBEYamiaOEBIzlPGRc6rre/Q6eUjz2p0/vsM5sSaIRnBXxOhuQVAFiA41PMMO0xjlbdV25OOTHccTCEJ1ecQhAQCEIWkBFNthNgV6mQge9awsS1j1yjy1nT4bdDIj1HpgBASWqsBfS9gvc8hpzM7Y8O/1WT5/by5Xln7Zb8v7vhxWBwpq1EpjmxAv2HU/AXPwnabR2PSFEcKmp194AGwHUsOvnMWthaNO1dUAal4iALBlsQRYeR+nwnU4d1KBWF83PMeYPnznH4ziy4cpK9HwPLjz42z5I+q4VkTOFsL+9bS81NZLH11+clXa2EFSlXTRQbMo0sCtgALHkQPr5Wkbbawr0qmR1IIVeYIv1uL8xrOfHn1N83H0aa+EITo4kY4jHARhAwgEIQgEIQgOEIQFHFHAIQhABCAhAI4jHAICEln2a+zWnVRMXtFbq4DUaJJF15ipUtY2PReo1OhtKImkqez/AGfiKeEq1K2ZFbK1NToTTFwXsRorWy+eT4mUKG7ODpA8DD0qZ6FKag373AvFtzBMUFQa5VIPnTJBuf4St/QtJnj6WuPLWTkqW0aTH8ttQW5ZTyN+U4zf/ZmLxL4fgU2rUwGCsmVvvWbxCy8tFU/PtOvGBXEVlw6gMA6q36RbM3LqEudfLvOw2ZslKNapYWBF1AsFFjdSAORsQP8ATOfHju7deXPt0oJX2b7XOowjf7lH/wA5rsfujtGhbi4OsAeoplxftmS4vPTGKxeQouni0Hrz/YE/CWn2jzW2o5/HX6A/Sd+l59vO+ydxNpYgqfs1REJAZ6i5AqE6vlcgsANdOdpKW7nsrwOGzVMSftLC2XOuRF/N92GIbtdiRe+gtedhTx5cMxICDUsdBb49P5fTmN5t+KGGQ3bU+6PxsO4XmF8yNe8aHRbNweFo3WhRpU17U6aqSe5IH+ftf2hiilCoKWhykixC2PNmuSALam/lIF2p7QcZUutFuGvLT3rf53Jmmq7z45kek2IqFHBVgSNVPMXtex699e8WxV6rvA9OrmoHRWOVtbsuoF76nTvNzhvaAz2pYuglSk2jWvcDut+v9JxMJnO9d3kcfomsW62htgMrU6eoJIzWtdAdNO5FvnNzsXaxxDUMLSBDsVQX7gc79OU0O7WwauPrrQo6X1ZjyRBzY/sB1JE9Abq7i4HA5XpUr1bAcVyWe9rEqDol7n3bc5rkt5ddScUnDvobLdnZFPDKLLdrauR4j5g/hHkJp/a3ufU2nh6LUCOPRZzTRjbiq4XNTUnTN4FIv2t1nZIoEvrTWqqhhyYOPJla6kfL6yakmottvevHVakyMyOpVlJVlYEMrA2KkHUEHS0ok9+2jc5MTQfaNBQK9EXrW04tAAXZv1ILm/5QRrYWgSQIwgYSBGEDCAQhCAQhCAxEI4QFHEY4BCEIAIRCOAGOIy9hQhdBVJCZlzkakJcZiPO14EheyfdBMQTjcVTzUkYJSRh4alT8TMD7yroLciT5ESYcRjbVF00uF9M1tfnMLAUKVKiuGpLkp0gUAFza3PxHmbm/qZj7xNU4PEonKVZSSFDeAEki3qefnynTxGWTtzeSnhBfKXY+6t7D1J6C85XB+0GuGIr06bUmuGVQQVB/KSxv6Hn5Tldq7ZJasmIu+YjI6W5i4BXXTXS1/LpMDd3Z9bGV6VEXCnxVCPwUl5t6m4A8yJ7sJwY4ervv/dngzvPnn6O2vb7pY3Io0xSbEcuIztmOhYXy5j6hR8FEy6e8eFNRyamUhQMpR+QJ8VwpGoZfOWXUoq0gtlulMAcsnX/tBEx8TsyhULNxXy2JYjKAF5mwK6ek+fqydn1Mbjld51k4raAeslRbFETMDqNXXQ6+R6+c0G0d4sPRD1MTUyqTovNnI5KFGtup9ew10W++964VRQoWaswDG+opIfdzW5sRYgfE6EAxVi8U9Vi9RizHqTf4eQ8hLvTm7rbO++NxYIwicKnrYkqGPpmNh20ufMTi8fhK6niVlfxH32ObMfNrm5m8wW1EFJFAGiqPQgWM3+O2zhMlHhBS4QcTwkDNYXvfre/LTSee8mW32Mf+fxZYY6yu78rEcQnpNt0Nm1qdNK+FpM2RELhcjlgoGYulmJ05kzU7Q9m+y61SnamaCoSGFJiBUXSwctcjXqLHU+RHfVfIutoCm53V3axG0appYcABRd3a+VF6XsDqeg8j0BIl7D+y3BUcSlZSWRSb0KwFSm11K+9odLhhcHUTsBhUpqFojIF0CKAqi3QKAAIkTbR7qbs0dnUlpLl4hVTUfkalQi/M9BmIA6epN+rw9awXMdbesw8XZhTc87WPwmh2tvdQwxy3DPb3Qb/E9podbWreE620/f8AwyjD1zYkntbpYDppOO2FtlsUWq1CFHIC9rD+ug/wTpg/vAeQ+J0EDOxLj7zN7pBzX5Zbag+Vv3nkdiCSQLDoOdh2nqva1NmpV0BsWp1FBHMFlKgjz1nlITNUQhCZCMIGEAijhAIQhAICEIBHFHAIGEUBwhCAGEI4Ho7CbVp4hKbo3gZVcdBYqGt6+I3879pcxGPDh6NEcQmytkGYKraeLoLi/PpeQpua+0qjilgl4qrqUqBWoqHNjmL6Lc3tYgk8tZIuA35+yA4PaFEUCq2R8MpamV6HK1yeuozXN+RnTqZ02/8A6Qw5IaquYgEG17DUWt10F9OWvLS53Wxdk0MMGFJQM1rnqbXtr2Fz8zMXAbepVMhFRSri6sNM3S+vn5TNeshORbn4eHy8QlRVtCuqKcmvn0zeX9Zx29+2/suHI62vbv2HxYqPS86OuQAAeQ5DpfkPhz+Uhf2h7Y4+INNTdUOvr0HwBJ9XPaS9mo5jE4h6rtUqMWZiWYnqx5y1HFMKAY8x7n5xQkEr4f2n0mtmDqedyLgH4TYv7R6D63S/8eUE+YMheE11VNJiT2h0x71RCvYNyHkRrM6j7UsEylCKjOPdIWykDuzcrehkHxqxGoi2tY63N+Eq4PfHEY6u1PRaYUsFF+jKNT10PlL9HZtSuVRqQY5wSQxGh5j1/v5ThNyMZlxdNTb7wNTHTxGxUfEqB6mTBgBw2QgdNSe5/wCBNYTc7ry5Y2+majZbO2bSoIAlOxHdixv2uZuMHRtbNz5kf52F5ZoEkXQEfqcWt6A/vM/D0up69ZXM3pg6/L0M8kz1rtDHUsLTetVYWRHcjqVRSxsOZsBPJbtcknmST8TMZNKYQhMhGEDCARRxQHCEIBCEIAYCEIDihCA4QhAcv7Pwb16lOjSF3dgqjzPUnoBzJ6ARYHCPWqJSpjM7myjz/kBzJ8p6B3B3LpYCmKhUNWYeJyLMBzsL+6PLyF9eWpNpa2O6271HA0KWFpgMedR/zvbxuw6XtYA8hYTO3h2Fh8dSNGugI/CbWam35kPT06zMQhSzaWsAO/nf6fWU0awJJOlptEKbb3dxuxanEpOlSiSSM2UrcaeJG5NqOXlzmdsbeaoTTqVaoUjK5W4uCxCIWUahPEp5a5h3EyfaXtD7bjsNs6k2isOIw6F7FjbrkQZvpMjGbl4SkuIqqDUu5fKzADIPcoh9WsTYc+dj0Fsd/ZWHvxvsq0+Fhypq+6xAYKhNySAw1IuRbpfra0ilmJJJNydSTqST1MlzbG4gxeBT7EA1ai7WLkK1Wld0ymobBrCnTylrDL2vIoxmFqUXelVUo6GzKwsQfMRdqsRxRyBQhCAQhCAQhCBXQZlZWQkMCCCOhGoP0knHCba2lTp1jUTDoyqyDiuhcW0eyBmsbEgG3oec1/s13N+0/wDu66ZqebLTQ6K5U+Ko/UoCLBR7zXBsAxkzthgASqAm1+2Y20zW58gB2m8YlcZu5uFXR+Ji9o4hrqCVRiAdfdL1CxI06AH0nWUtg4bIutYiwNzXqgkEmxsGA5AaW6yuqSUQfnsD06eL+YmyrWyelpdIx6+zaD02oNSVqTrkZT1XlqedxzB76ieZN59kNgsViMKxvwnIB/NTNmRvipU/Gemale2UfHQfvIe9uOzstfDYoDSqhptp+Okbgk9yrgf6JnKLEZwhCYUoQhAIo4oDhCEAhCEAhFHAI4pkYLB1a7inRptUc8lRSzH4CBYlVJCxCqCSSAABcknQAAczOr2b7Oto1XyVKXBAIBeofDc9Fy3LH00FtSJKe5O4eG2flqtatiRf7w8kB0tTS+ht+LU6nUAzUgxPZpuH9hAxWK1xDLYJ0oqbGx7voL9B9Z3dbFBeZlqu7D+puB8zoPnNXiVZgw4qAkEC3jsehte00yzMTjLX10A5mw15310mvq7VRMPVrYlxSyZyCupKjllHXXQEf3lFfKx4baM1ylmFywBJyhveI10se9tLzgvaVizTpLhkDam7+FhZRyFiPifVe8l3tT9l+zjXfF7Qqi92NNL6nO9nc37gZBf9RnS76cRUFCjbPpUc9LlgtGn/AKqrKT5KZs909lHC4PD0eTIFZ/8Aqt4n+RJA9BNdvXVZ3p00XxGrRu19S9OpmXTyuT8Jdaie7qd3cKqUaaJ7gAUf9JBkT5qAZi7ybn4XaKFMQpDrolVdKidRY/iX9J01PI6zZ4CyjIvIWUeQAAH7TX4jEZsRdbW924ytcr18tdOnKUQHvfulidm1cldboT93VUeCov8A+W7qdR5ixOgnqXaGEo4uk+HxKB6bc1OhBHJgQdGHcSFt9PZpXwQathia+HALE2+9pKOedR7ygfiXsSQBMWNOCijikBHFHAJ0W5G7LbQxATUUks1ZuyX0UfqbUD0J6TR4PCvWdKVJSzuwVVHVjoBrPQm6O7tPZ+HWinic+Kq4uc9Ui2nZRyA+PMmWTaVusLhqdFaVGkoVFAUAdFWwA/aZdWqe4Udz/SYFapY3J1Ata406/wBPlNTtnElKTvqTbT+I6CbRnYLHrUzZGLinUqJfzLZ/52v+kzdFrofSRnsDai4PiNiGyUmW55khl1VjYEnmRp+abPGb7U6tN8Ph6bkurJxCQuUMCMyrqTqba5dTA2uF2nTqsGpOjjNc5WBNvUH9+5mm9q1CnW2fVOdC1J6dVRnUEkHIwAvr4XY28pi4TdOkvBLXJbVgfy87W+U572r7Ip0qGGqUlCharo1updQy39OG3zkvhUaRRxTmohCEBQjigVWhY9pftC0CxlMMpmRaGWBj5T2jCHtMjLOw3K3M+1gYnEHLhwxAUGz1mU2IBHupcEE89CB3Fk2NPupujXx76ApRB8dYjwjuqfnbyHLraTHsfA4XZycPDIFuAGYsnEqkcs7Na/oDYX0EvVKyUkCqFREXRVGVVXoABynMbW2nUe/DqZR5C/xnSTTG9uwO2eHqwYeTj6q63tz5nSY+J3toWtnX0HjPyEjXE0TcZze+vhRVBv18Oh+UwsZt2nRBWigZ+51VT5gWBPl9ZLV07nae+FGkpfK9v1HIpPYKtyT6CcZtb2iYt7rhglFe4UFyPVr2+vwnLYvFVKzZqrlj0vyA7ADQD0lnLM2qeLxNas3Eq1GdvzMxJHXQnl8JsjtOvV4bYh2rGmLrme5CBluGOpscqjxdLdJrbQtIqS9ie0RFpqrVHWoLX4ymrTJ62dDnHxEyq+2uM+GqtXw4++eqMrZkBVClnbN4f/kJANuXnIrAl7iDIEyjQsS3U3y6egy/Uy7RIG2N9qtOtkWulWmyBjlylA+ZgVbh2PIA2JPPXSZGzd57OrGlTC/mUufiAH1HleRoBMnBYpqRuvLqDyP9/OXYn7Ze2MJWtaoubt7mvo7XM25okeIcvQn+ch/dna9J3QZspOmRrczyt0b95IuCxBBRVJQG/u6cug7XvNIg7fXY4w2OxNJFKJnzUwRb7pxmXL+kXIH8M0ZoGT97QN3lxuEd9Wr0FZ6TWGZlUZmpaAXBHL9QB73g7JMWLthcA94cAzMyRFZB2nsdwKHFVqrgE00UL+k1CQWHnZSPRjJpqUW5a28uX0kSeyEWbGE8iKIv/u/1Elpa5IAU2uPeFjY/HSbngWhs7voOw0Exdt0aK0iHPoOpmu2rj8bRNmqXU8mVQt/poZHO/W8xbPhaZJJA4rk3Njzpj+fy6mWo53e3a32ioUpn7pTpb8bDr6Dp8+subHxJdLHmlgfMfhP0/wAvNDaX8FiWpOHXpoQeRU8wZhUw7vbXq1WUVST4fCctr5RqSepNpTvdsx8fh3w1FQal1qU7kAF0NiLnkcrOB6zV7vbTwmQFza+qmxtf8rAaAi87fZOKw5UVVIY38IA1063mx5xrYZkZkcFWUlWUixVlNiCOhBBEo4Ulz2q7tisp2jQWzqAMQo1zUxoKvqo0PlY/hMirLOdirHDi4cv5YZZBY4cOHL2WGWUO0LSvLGFhFNpcoUWchVFyf27nsIss3GyyqoeQJ5n9vgJ24eP8TLTlzcv4eO9L9PYJSlxWGZSbZtLA3t7vMC9xc87TqNy94AQ2EfKpW7UgoCqV1LKANLg69zc9pzdTbjrTNFal1IIK2B0b3hqNL6cuw7TRozBg4JBBuCDYgg3BB7iejn6MMdTThwdeV3dpbxdfMcrehHPQ6TTrg1Wpl95SdCGsVHW/aaXA71iy8dCSNCyZTmHQ5TbL52Ovlymu2vtupXui3Wn26t/Eb/T955dvVIu7xbXDsaWGNqYuC19Xtpofy+fX058+KcvWlQmWmPw4+HMiwlWUSDFNOLhzM4cOFGhh5I8syuFEacDGtKgJcKyhmgVAkaqbEag9iORk3bJxBrZKqC6uiuv+sA/zkFlpLHs32zh6eDBxFekhRnSzuFNr5lvc9jYeXpNY1LHbvUyAC+vfz5kyD978CKGKqhfdc8RfIPckeVmzADtaSPtfe/ZwBviaZ6eHNU/+gMjne3HUqxotRJNgx1VlujWysLgaeEy3wRpCJTllIeVCrMNJF9ltImlifN1A9Ql/5id/QrEorr/Cw8xOG9l9QcCoRzFc3/26dp2dOoEqVFIOVhmsO/O4v15/ObnhGq9oO3RQwZ4ZHEqFVpk65TzZvgoPlci/aQqaZPP+5PcnrJO9pK0+DRs4J4l0HUqVObToAcvzkf8ADmaMHhQ4Mz+HFw40FsrFtQbup94fzHn+/wArSTsHezDIlOnUTL4R40JZfUggEfC+vykb8OX8HUyMMwDLfUG/zFiDeWCbcJjaFYXo1EYH3rlb2PQo2vzEh/fbdd8FWdkpn7O7XpONVF9eGT0INwAeYA56zr9j4jD6EYPMPzqyvoeoWoNPSdNTxODro9IhmV1KsOGxFjpZitx9eYlsECmnEUm321sl8JVahUZWZAtyt7eJQw5gG9iPnNeRMDHyynLL5EptAVowJWKZ7S4tKEWgsv0WIBFgwPQ30OmosRY6CMUZWKcosLSlXCMyLS2Uc+UUWiLRZhMhcN3MuCivaNKxA0qzCZXAEqFBe0aRiRZZnCkO0eQRoYGUxZWmx4Yj4YjRtrPHEWftNqEhkEaNtTr2hw5tDSWUcBe8aNtbwZcp5lBANgbX87cv3PzmaaA7y09O0aNrVHYlSoM6DMNdBz052HX+8dKmTYVcwK+EDrlXSxB5WmbgK1RQ2Q5efNlXUi2mY68uk1mKxtRiRZj9NZ3w6ZPVZr6uWe7+mXf0V1kQd/lK6mCKhSQQGF1PcdxMJAzc1+v85s6DsxAvcmwFzc35AaznncLfTNOnHjl73ddf7MXyPiKZ5FVcD0JVj/3JJAqMtQAHMHXVSBdh5EdROT3EwaUGqvUqJxsgyqCDlpE+NrHQ6hRy0H8U6VN6cOTlemSwPvKtlPpqSJmXs3cbLquQ9pWBDU8PWVSrK7o2nMOM66+XDbT9U4A02EkL2k4ypUq0Bc8LhhlTTKKmZgxsObWyi5+FrzjCQIZYF2EfHYcxMpqolpqogW/tI6iMYhO8RAPT6ShsMD0Mgz8Dth6JUKxy37gZWOmZSQcp87d52Gz9+EWwarUY/lJLkN18RNiPjI/XBGxHM9Cb6eliBLdPBVAff06zO83f8rpna7dfv9jaGJalWpkcQDJUAIJK81JsbKR4hzN8w7TkysvjDkQ4Jlkvu43XsxckXDmYEEMol0ikCVAQhKGBKgsIQGFjtCEILwzQhCjNDiQhAfEMOIY4QHngDCECsKY+GYQgMU5VwxCECoUxKuHCECoIJbegp5gQhKixUwy9DFhwUvZAfPyhCYzx3NO/By3iz6sSeu4IYBwQbi11se4Imywe8OMtlaoAv6qQdvnlzH4mEJznHrxXq5fjcuTtccf4WNuY58Rw7tUYrm8TAUxY20VFNhqP+ZqxhmhCdMZ2eHPLd2uLhu8urREITTKoUhKxSEcIFa0h2lzhCEIFD0xLLLCECnLKcsIQj//Z"
          width="900"
        />
        <p className="text-3xl justify-center">
          I am also learning martial arts. It helps me defend myself and get a
          workout.
        </p>
        <br />
        {/* <Link className="text-center bg-lime-500 m-3 p-3" href="https://karatesammamish.com/" target="_blank">My martial art's webpage.</Link> */}
        {/* <Button as={link} href="https://karatesammamish.com/" target="_blank">Karate Webpage</Button> */}
        <Button
          as={link}
          className="bg-red-500 text-black text-3xl"
          href="https://karatesammamish.com/"
          target="_blank"
        >
          My Karate Webpage
        </Button>
      </div>
    </div>
  );
}
