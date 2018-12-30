# Automata theory project

By @NoureldeanSaed (Noureldean Saed Swearky)

30/Dec/2018 (That's how the holiday went)

## Project: Build an Automata builder

### Project description:

The following project is a web application interface (No backend) which allows the user to:
  + Create/Move/Edit/Delete Automata states
  + Create/Edit Transitions for each state
  + Test for some input against the Automata (It also could be a non-deterministic automata)

To any user:
  + Feel free to post issues on my repo
  + How to use the state:
    + When you hover the state five options will appear:
      + Click and hold the `+` icon and move it to another state to create a transition
      + Click on `○` to mark the state as final
      + Click on `↘` to mark the state as initial
      + Click on `⨯` to Delete the state and all transitions going/coming to and from it
      + Click on `☰` to open the transitions modal
        + To use the transitions modal you must have some transitions going FROM that state to any other
        + After typing the new desired input you have to press `Enter` to save that field
          If multiple transitions are available you have to press `Enter` on each and every one you wish to save
        + You can set transition's input by typing your desired ranges separated by a comma
        + Allowed characters (A-Z, a-z)
        + E.g. type in `a, b, c, d...g, A...Z`
  + The transitions table is a bit self-explanatory

### Used tech stack:
  + JSX (for HTML)
  + LESS (for CSS)
  + ReactJS + BabelJS (for Javascript)

Note to Mr. Nasser El Masri:
  I am a web developer, I hadn't used Java because I do not know how to code in Java. If I had started
  this project in Java I would either have taken weeks or never finished it at all.
