players = [
    {
        "name": "Kevin Durant",
        "age": 34,
        "position": "small forward",
        "team": "Brooklyn Nets",
    },
    {
        "name": "Jason Tatum",
        "age": 24,
        "position": "small forward",
        "team": "Boston Celtics",
    },
    {
        "name": "Kyrie Irving",
        "age": 32,
        "position": "Point Guard",
        "team": "Brooklyn Nets",
    },
    {
        "name": "Damian Lillard",
        "age": 33,
        "position": "Point Guard",
        "team": "Portland Trailblazers",
    },
    {
        "name": "Joel Embiid",
        "age": 32,
        "position": "Power Foward",
        "team": "Philidelphia 76ers",
    },
    {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls",
    },
]

kevin = {
    "name": "Kevin Durant",
    "age": 34,
    "position": "small forward",
    "team": "Brooklyn Nets",
}
jason = {
    "name": "Jason Tatum",
    "age": 24,
    "position": "small forward",
    "team": "Boston Celtics",
}
kyrie = {
    "name": "Kyrie Irving",
    "age": 32,
    "position": "Point Guard",
    "team": "Brooklyn Nets",
}

class Player:
    new_team=[]
    def __init__(self, team):
        self.name=team['name']
        self.age=team['age']
        self.position=team['position']
        self.team = team['team']
        Player.new_team.append(self)
    def get_team(self,team):
        for keys in self.team.values():
            # the new team
            self.new_team.append(keys)
            print(self.new_team)
        return self
    @classmethod
    def get_team(cls,team_list):
        for key in range( len(team_list)):
            cls.new_team.append(team_list[key])
# Create your Player instances here!
player_kevin=Player(kevin)
player_Kyrie=Player(kyrie)
player_jason=Player(jason)
print(player_kevin.get_team(kyrie))
