import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Mes Posts';

  posts = [
    {
      title: "Mon premier post",
      content: "L'ancien attaquant des Bleus n'a pas fermé la porte à Bordeaux, qui pense à lui pour prendre la succession de Gustavo Poyet. Laurent Blanc, Rémi Garde et un troisième entraîneur sont également en lice. ",
      loveIts: 2,
      created_at: new Date()
    },
    {
      title: "Mon deuxième post",
      content: "À moins d'un énième rebondissement avant le 31 août, l'attaquant italien, attendu avec impatience à Marseille, restera finalement à Nice. L'OM semble maudit sur le dossier du «grantatakan». ",
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: "Encore un post",
      content: "Guidé notamment par Mohamed Salah intenable et Naby Keita déjà indispensable, Liverpool s'est imposé sur le terrain de Crystal Palace (2-0) pour rester au contact de la tête de Premier League.",
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
