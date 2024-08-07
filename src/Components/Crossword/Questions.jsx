import "./Crossword.css";

export default function Questions() {
  return (
    <div className="questions">
      <div className="column">
        <h3>Across</h3>
        <div className="q-txt">1. Gendry's profession</div>
        <div className="q-txt">2. Substance that can kill White Walkers</div>
        <div className="q-txt">3. Owner of Nymeria</div>
        <div className="q-txt">4. "A Lannister always pays his ___"</div>
        <div className="q-txt">5. The Hound's biggest fear</div>

        <div className="q-txt">6 .Weapon Tyrion used to kill his father</div>
        <div className="q-txt">7. Former head of House Frey</div>
        <div className="q-txt">
          8. The leader of the White Walkers, The ___ King
        </div>
        <div className="q-txt">9. The Red Viper of Dorn, ___ Martell</div>
        <div className="q-txt">10. Ned Stark's great sword</div>
        <div className="q-txt">11. "Hold the ___"</div>
        <div className="q-txt">12. Arya's sword</div>
      </div>
      {/* ///////////////////// */}
      <div className="column">
        <h3>Down</h3>
        <div className="q-txt">
          1. Tyrion's champion in the Trail by Combat at the Eyrie
        </div>
        <div className="q-txt">2. Daenery's children</div>
        <div className="q-txt">11. "What is dead may never ___"</div>
        <div className="q-txt">13. Island that Jorah Mormont hails from</div>
        <div className="q-txt">14. Sansa's direworf's name</div>
        <div className="q-txt">15. Who cured Jorah Mormont's disease</div>
        <div className="q-txt">16. Throne located in the Red Keep</div>
        <div className="q-txt">17. Disease contracted by Jorah Mormot</div>
      </div>
      <div className="column">
        <h3></h3>
        {/* <br /> */}
        <div className="q-txt">18. Daenery's husband, Khal ___</div>
        <div className="q-txt">19. Animal that killed King Robert</div>
        <div className="q-txt">20. Continent of the Seven Kingdoms</div>
        <div className="q-txt">21. Head of House Lannister</div>
        <div className="q-txt">22. Religious place of worship</div>
        <div className="q-txt">23. Common last name for a Dornish bastard</div>
      </div>
    </div>
  );
}
