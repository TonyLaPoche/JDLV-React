# Mécanique du jeu

## Au click sur lancer je souhaite

***

*(Pensez à crée une boucle à l'aidez d'un **useEffect** et d'un **setInterval** afin de répéter l'action de jeu toute les X secondes.
Puis durant le l'action du jeu désactiver les boutons **reset** et **random**.
Pour finir convertir le bouton **lancer** en **Arreter** qui ce dernier pourra arrêter la boucle avec
un **clearInterval** permettant de de rétablir l'état du jeu à son état d'origine (vierge). )*

### exemple setInterval avec useEffect

```js
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
```

***

- Scanner mon tableau.  
  - durant le scanne je souhaite déterminer sur la cellules courante combien elle possèdes de voisin *"vivant"*.  
    - (limiter mon scanne à l'intérieur de la zone de jeu **important** )  
  - retourner mon *"compteur"*.  
- Phase d'action.  
  - J'initialise un nouveau tableau *"vierge"*.  
  - Je boucle sur mon tableau initiale afin d'avoir les mêmes lignes et cellules.  
    - Quand je  bouclerais sur les cellules je compare leur état via ma fonction de *"compteurVoisin"*.  
      - Dans le cas ou :
        - J'ai 3 voisin et la cellule courante est mort alors je **vie**.
        - J'ai 2 ou 3 voisin et la cellule courante est vivante alors je reste en **vie**.
        - J'ai moins de 2 voisins ou plus de 3 voisins vivant alors la cellules courante est **morte**.  
      - A chaque cas de figure je push() le nouvelle état de ma cellules courante dans mon nouveau tableau de jeu.
      - Je remplace mon tableau Initiale par le nouveau tableau.
