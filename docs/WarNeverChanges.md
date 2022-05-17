# Please note

* we calculate for 100% destruction without items, healing and other fancy stuff aka tactics aka skill
* we don't consider ships we destroy in battle
    * meaning if there are multiple targets we provide the amount of ships needed per target
    * in theory once we destroyed one target ship the average damage the enemy deals should reduce, but that happens on both sides and would be to complex to simulate for now
* we calculate with damage per second not per shot
    * everything is average, in theory faster shooting ships would prevail
    * in theory we could also calculate the scenario by seconds, e.g. damage done initial, damage done second 1, damage done second 2, etc.
        * bit to complex for now, but probably nice with graphics to explore
        * because it also plays a role who you attack, if all ships attack the same other ship, etc.
        * !!! But this approach makes more sense as e.g. 2 frigates should be enough to destroy a ship of the line, but current formula suggest 3,76 (to not loose any ship)

# Ideas

* select ships vs ships vs buildings
* apply items to ships and buildings

# Todos

* is there a KPI that can be calculated, stating how strong someone is?
    * like DPS + hit points?
    * the higher the hitpoints and damage per second the better
* do we assume our ships shot first?

# to gather

* ships + properties
* buildings + properties
* items (static ones at least) + properties

# sources

* [ShipStats.csv](https://anno1800.fandom.com/wiki/Ships_properties#Ships_statistics)
* [BuildingStats.csv](https://anno1800.fandom.com/wiki/Category:Harbour_buildings)

# problems/limitations

* static stuff only
* healing and activatable items (like flamethrowers and such)
* taking over island is "flexible" as it depends on the happiness of the population --> therefore the damage/destruction you have to do is usually different==less

# potential first version

* create list of units by specifying amount and type
* create list of enemy units by specifying amount and type
* get list of surviving units


# general concept

* strategies: "Leave no one behind" (lose no/few ships), "Last ship standing" (just "win" at the end)
* calculate by seconds, because more precise
* Which target will be focused? 
    * highest attack rate, highest hit points, highest damage per shot, highest damage per second?
* pick your and target fleet


