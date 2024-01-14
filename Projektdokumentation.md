
# Projekt-Dokumentation



Filip Mitrovic, Lennard Bühler, Filip Kritzner und Raul Gilardoni

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|   17.11.2023   | 0.0.1   | wir haben in der Gruppe ein Thema ausgesucht für dieses Projekt |
|24.11.2023      |0.0.2    |Wir haben die Planung erstellt für unser Projekt, aufteilung wer was macht und schon angefangen zu programmieren|
|01.12.2023      |0.0.3    |Wir haben unsere Startseite implementiert und Projektdoku erweitert|
|08.12.2023      |0.0.4    ||

## 1 Informieren

### 1.1 Ihr Projekt
In diesem Projekt entwickeln wir eine interaktive Website unter Verwendung von HTML, CSS und JavaScript. Ziel ist es, den Nutzern eine Vielfalt an unterhaltsamen Spielen anzubieten. Zu den geplanten Spielen zählen Klassiker wie Tic Tac Toe und Snake sowie Quizspiele. Sollten wir genügend Zeit zur Verfügung haben, planen wir die Integration weiterer Spiele, um die Vielfalt und den Unterhaltungswert der Plattform zu maximieren.




### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |       muss         |   funktional   | Als User möchte ich eine attraktiv aussehende Website.   |
|2     |  muss              |       funktional         |   Als User möchte ich bei der Startseite eine Parallex website.                   |
|  3   |      muss              |    funktional            |Als User möchte ich eine Navigationsleiste auf der Website zur Verfügung haben.|
|  4   |    muss         |  funktional           |Als User möchte ich, dass die Links bei der Navigationsleiste funktionieren und mich zur richtigen Seite führen. |
|   5  |      muss       |    funktional         |Als User möchte ich bei der Startseite eine Beschreibung der Website haben. |
|    6  |      muss           |    funktional         |Als User möchte ich Tic Tac Toe spielen können.|
|   7   |    muss             |  funktional           |Als User möchte ich Snake spielen können. |
|   8   |    muss             |  funktional           |Als User möchte ich ein Quiz-Spiel spielen können.|
|   9   |    muss             |  funktional           |Als User möchte ich, dass beim Quiz-Spiel mir am Ende des Quizes anhand eines Diagrammes mein Score angezeigt wird.|
|   10   |    muss             |  funktional           |Als User möchte ich, dass mir mindestens 5 Fragen gestellt werden beim Quiz.|
|   11   |    muss             |  funktional           |Als User möchte ich, dass mindestens 3 Antworten stehen und ich die richtige aussuchen muss.|
|   12   |    muss             |  funktional           |Als User möchte ich, wenn ich eine Antwort auswähle ich direkt zur nächsten Frage geschickt werde.|
|   13   |    muss             |  funktional           |Als User möchte ich nicht, dass mir direkt angezeigt wird ob meine Antwort richtig odr falsch ist.|
|   14   |    muss             |  funktional           |Als User möchte ich, dass ich gegen einen Freund Tic Tac Toe spielen kann. |
|   15   |    muss             |  funktional           |Als User möchte ich, dass der erste Spieler bei Tic Tac Toe das Symbol X spielt  |
|   16   |    muss             |  funktional           |Als User möchte ich, dass der Zweite Spieler das Symbol O spielt. |
|   17   |    muss             |  funktional           |Als User möchte ich, dass mir am ende des Spieles angezeigt wird ob ich gewonnen oder verloren habe. |
|   18   |    muss             |  funktional           |Als User möchte ich, dass ich mein Snake nach rechts lenken kann. |
|   19   |    muss             |  funktional           |Als User möchte ich, dass ich mein Snake nach links lenken kann.  |
|   20   |    muss             |  funktional           |Als User möchte ich, dass  ich mein Snake nach unten lenken kann. |
|   21   |    muss             |  funktional           |Als User möchte ich, dass ich mein snake nach oben lenken kann.  |
|   22   |    muss             |  funktional           |Als User möchte ich, dass ich Münzen einsammeln kann |
|   23   |    muss             |  funktional           |Als User möchte ich, dass mein Snake wächst immer wenn ich eine Münze einsammle  |
|   24   |    muss             |  funktional           |Als User möchte ich, dass wenn ich aus dem Spielfeld mit meinem Snake gehe ich verloren habe. |
|   25   |    muss             |  funktional           |Als User möchte ich, dass wenn mein Snake stirbt das Spiel direkt wieder neustartet. |





### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |      Website ist geöffnet        |  Der User schaut sich um     |      Schöne Website mit gut gegliederten Elementen         |
|2.1     |  Website ist geöffnet               |       Der User scrollt nach unten         |  Es gibt eine tolle Animation                |
|  3.1   |      Website ist geöffnet               |    Der User scrollt nach oben            |Es gibt eine Navigationsleiste|
|  4.1   |    Website ist geöffnet         |  Klick auf Navigationsleiste           |Link führt zur richtigen Seite |
|   5.1  |      Website ist geöffnet       |    scrollt nach unten         |Es gibt eine Beschreibung |
|    6.1  |      Website ist geöffnet           |    klickt auf TicTacToe         |Man kommt auf die TicTacToe Seite|
|   7.1   |     Website ist geöffnet            |   klickt auf Snake            |Man kommt auf die Snake Seite|
|   8.1   |   Website ist geöffnet              |  klickt auf Snake           |Man kommt auf die Quiz Seite|
|   9.1   |   Quiz wurde gespielt            |  Die letzte Frage wird beantwortet           |Man sieht ein Diagramm mit dem Score|
|   10.1   |    Quiz wurde geöffnet             |  man beantwortet vier Fragen           |Es gibt noch eine letzte fünfte Frage|
|   11.1   |     Quiz wurde geöffnet              | Man startet das Quiz        |Zu der Frage gibt es 3 Antworten|
|   12.1   |    Quiz wurde geöffnet             |  Man beantwortet eine Frage           |Man wird direkt zur nächsten Frage geschickt|
|   13.1   |    Quiz wurde geöffnet             |   Man beantwortet eine Frage             |Es wird nicht direkt angezeigt, ob die Antwort richtig odr falsch ist.|
|   14.1   |    TicTacToe wurde geöffnet          | Der Spieler klickt auf ein Feld           |Der nächste Zug ist das Symbol O (man kann gegen einen Kollegen spielen) |
|   15.1   |    TicTacToe wurde geöffnet            |  Der Spieler klickt auf ein Feld              |Das erste Symbol ist ein X  |
|   16.1   |     TicTacToe wurde geöffnet             |   Der Spieler klickt zum zweiten Mal auf ein Feld            |Das zweite Symbol ist ein O |
|   17.1   |    TicTacToe wurde geöffnet             |  Ein Spieler platziert das gewinnende Symbol        |Es wird angezeigt, dass man gewonnen hat. |
|   18.1  |    Snake wurde geöffnet           |  rechte Pfeiltaste         |nach rechts lenken|
|   19.1   |   Snake wurde geöffnet              |  linke Pfeiltaste          |nach links lenken|
|   20.1   |     Snake wurde geöffnet              |   obere Pfeiltaste            |nach unten lenken|
|   21.1   |    Snake wurde geöffnet             |   untere Pfeiltaste           |nach oben lenken|
|   22.1   |     Snake wurde geöffnet            | Spieler bewegt sich über Münze    |Münze wird eingesammelt|
|   23.1   |    Snake wurde geöffnet             |  Spieler sammelt Münze ein           |Snake wächst|
|   24.1   |    Snake wurde geöffnet              |  Spieler bewegt sich ausserhalb des Spielfeldes           |Man verliert die Runde |
|   25.1   |    Snake wurde geöffnet           |  Spieler hat verloren           |Runde startet direkt wieder neu|


### 1.4 Diagramme




## 2 Planen

| AP-№ | Zuständig | Beschreibung | geplante Zeit (min) |
| ---- |  --------- | ------------ | ------------- |
| 1.A  |   Lennard Bühler              |   Eine Homegage erstellen, welche schön aussieht         |240|
| 2.A  |     Lennard Bühler               | Die Homepage hat ein Dynamischen Hintergrund           |120|
| 3.A  |      Lennard Bühler              | Auf der Homepage gibt es die möglichkeit auf TicTacToe, Snake und das Quiz zugreifen zu können (Navigationsleiste)            |120|
| 4.A  |      Lennard Bühler              | Die Navigationsleiste auf der Website führt zu den richtigen Links         |30|
| 5.A  |      Lennard Bühler              |  Die Homepage hat eine Beschreibung          |30|
| 6.A  |      Filip Kritzner               |  Es gibt eine Webpage für TicTacToe        |120|
| 7.A  |      Filip Mitrovic             |  Es gibt eine Webpage für Snake         |120|
| 8.A  |      Raul Gilardoni             |  Es gibt eine Webpage für das Quiz        |30|
| 9.A  |      Raul Gilardoni             |  Beim Quiz wird ein Diagramm mit dem erreichten Score angezeigt.      |240|
| 10.A  |     Raul Gilardoni             |  Das Quiz hat mindestens fünf Fragen          |60|
| 11.A  |     Raul Gilardoni              |  Das Quiz hat für jede Frage drei Antworten zur Auswahl          |60|
| 12.A  |     Raul Gilardoni               |  Beim Auswählen einer Frage wird man direkt zur nächsten geschickt        |60|
| 13.A  |     Raul Gilardoni               |  Ob richtig oder falsch gewählt wurde, wird nicht direkt angezeigt, sondern die Antworten werden gespeichert       |120|
| 14.A  |     Filip Kritzner                  |  Beim TicTacToe kann man abwechslungsweise ein X oder O platzieren (damit man gegen einen Kollegen spielen kann)       |240|
| 15.A  |     Filip Kritzner                 |  Beim TicTacToe ist das erste Symbol ein X     |30|
| 16.A  |     Filip Kritzner                  |  Der zweite Zug ist das Symbol O    |30|
| 17.A  |     Filip Kritzner                  |  Am Ende des Spiels wird angezeigt, welcher Spieler gewonnen hat    |60|
| 18.A  |     Filip Mitrovic               |  Im Spiel Snake kann man sich nach rechts bewegen     |30|
| 19.A  |     Filip Mitrovic               |  Im Spiel Snake kann man sich nach links bewegen     |30|
| 20.A  |     Filip Mitrovic               |  Im Spiel Snake kann man sich nach unten bewegen     |30|
| 21.A  |     Filip Mitrovic               |  Im Spiel Snake kann man sich nach oben bewegen     |30|
| 22.A  |     Filip Mitrovic               |  Im Spiel Snake kann man Münzen einsammeln     |60|
| 23.A  |     Filip Mitrovic               |  Im Spiel Snake wächst man wenn man eine Münze einsammelt    |60|
| 24.A  |     Filip Mitrovic               |  Im Spiel Snake verliert man, wenn man sich ausserhalb des Spielfeldes bewegt   |60|
| 25.A  |     Filip Mitrovic               |  Wenn man in Snake verliert, startet das Spiel direkt neu   |40|





## 3 Entscheiden

Wir haben uns für die geplanten Arbeitspakete entschieden.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  | 24.11.23 |  Lennard Bühler              |240|290 |
| 2.A  |24.11.23 |   Lennard Bühler               |120|150|
| 3.A  |01.12.23|    Lennard Bühler              |120|100|
| 4.A  |01.12.23|    Lennard Bühler              |30|15|
| 5.A  |01.12.23|   Lennard Bühler              |30|35|
| 6.A  |24.11.23 |  Filip Kritzner               |120|135|
| 7.A  |24.11.23 |   Filip Mitrovic             |120|155|
| 8.A  |24.11.23 |   Raul Gilardoni             |30|35|
| 9.A  |24.11.23 |   Raul Gilardoni             |240|215|
| 10.A  |01.12.23|   Raul Gilardoni             |60|45|
| 11.A  |01.12.23|   Raul Gilardoni              |60|75|
| 12.A  |01.12.23|   Raul Gilardoni               |60|95|
| 13.A  |01.12.23|   Raul Gilardoni               |120|105|
| 14.A  |01.12.23|   Filip Kritzner                  |240|235|
| 15.A  |24.11.23 |   Filip Kritzner                 |30|40|
| 16.A  |24.11.23 |   Filip Kritzner                  |30|35|
| 17.A  |01.12.23|      Filip Kritzner                  |60|65|
| 18.A  |24.11.23 |     Filip Mitrovic               |30|60|
| 19.A  |24.11.23 |     Filip Mitrovic               |30|10|
| 20.A  |24.11.23 |     Filip Mitrovic               |30|10|
| 21.A  |24.11.23 |     Filip Mitrovic               |30|10|
| 22.A  |01.12.23|     Filip Mitrovic               |60|55|
| 23.A  |01.12.23|     Filip Mitrovic               |60|70|
| 24.A  |01.12.23|     Filip Mitrovic               |60|75|
| 25.A  |01.12.23|    Filip Mitrovic               |40|50|



## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |15.12.23|     Funktioniert      |  Mitrovic      |
| 1.1  |15.12.23|     Funktioniert      |  Mitrovic      |
| 1.1  |15.12.23|     Funktioniert      |  Mitrovic      |
| 1.1  |15.12.23|     Funktioniert      |  Mitrovic      |
| 1.1  |15.12.23|     Funktioniert      |  Mitrovic      |
| 1.1  |15.12.23|     Funktioniert      |  Mitrovic      |
| 1.1  |15.12.23|     Funktioniert      |  Bühler      |
| 1.1  |15.12.23|     Funktioniert      |  Bühler      |
| 1.1  |15.12.23|     Funktioniert      |  Bühler      |
| 1.1  |15.12.23|     Funktioniert      |  Bühler      |
| 1.1  |15.12.23|     Funktioniert      |  Bühler      |
| 1.1  |15.12.23|     Funktioniert      |  Kritzner      |
| 1.1  |15.12.23|     Funktioniert      |  Kritzner      |
| 1.1  |15.12.23|     Funktioniert      |  Kritzner      |
| 1.1  |15.12.23|     Funktioniert      |  Kritzner      |
| 1.1  |15.12.23|     Funktioniert      |  Kritzner      |
| 1.1  |15.12.23|     Funktioniert      |  Kritzner      |
| 1.1  |15.12.23|     Funktioniert      |  Gilardoni      |
| 1.1  |15.12.23|     Funktioniert      |  Gilardoni      |
| 1.1  |15.12.23|     Funktioniert      |  Gilardoni      |
| 1.1  |22.12.23|     Funktioniert      |  Gilardoni      |
| 1.1  |22.12.23|     Funktioniert      |  Gilardoni      |
| 1.1  |22.12.23|     Funktioniert      |  Mitrovic      |
| 1.1  |22.12.23|     Funktioniert      |  Mitrovic      |



`Fazit:`

Unsere Gaming-Website funktioniert. Alle drei Spiele sind fertig und spielbar. Im Grossen und Ganzen ein gutes Projekt.

## 6 Auswerten
Reflexion bei unseren Portfolios.
