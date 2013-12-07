    var Player = Backbone.Model.extend({
        defaults: {
            name: 'default',
            position: 'default',
            number: 0
        }
    });

    var Team = Backbone.Collection.extend({
        model: Player
    });
    
        var Team = new Team([
        {
            name: 'Lionel Messi',
            position: 'forward',
            number: 10
        },
        {
            name: 'Neymar',
            position: 'forward',
            number: 11
        },
        {
            name: 'Andres Iniesta',
            position: 'midfielder',
            number: 8
        },
        {
            name: 'Xavi',
            position: 'midfielder',
            number: 6
        },
        {
            name: 'Cesc Fabregas',
            position: 'midfielder',
            number: 4
        },
        {
            name: 'Ibrahim Afellay',
            position: 'midfielder',
            number: 19
        },
        {
            name: 'Carles Puyol',
            position: 'defender',
            number: 5
        },
        {
            name: 'Gerard Pique',
            position: 'defender',
            number: 3
        },
        {
            name: 'Jordi Alba',
            position: 'defender',
            number: 18
        },
        {
            name: 'Martin Montoya',
            position: 'defender',
            number: 2
        },
        {
            name: 'Victor Valdes',
            position: 'goalkeeper',
            number: 1
        }     
    ]); 
    
    // team view all players
    var TeamView = Backbone.View.extend({
        tagName: 'ul',
        className: 'list',
        events: {
          "click button" : "openStats"
        },
        render: function(){
            this.collection.each(function(player){
                var playerView = new PlayerView({ model: player });
                this.$el.append(playerView.render().el); 
            }, this);
            return this; 
        },
        openStats: function (event) {
          e = event.target.id;
          Router.navigate('stats/' + e + '/', { trigger: true });
        }
    });
    
    // player view populating tpl
    var PlayerView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#template').html()),
        render: function(){
            this.$el.html( this.template(this.model.toJSON()));
            return this; 
        }
    });
    
    // example using events
    StatsView = function () {
        $(".stat").html('<h2>Stats for player number ' + e + ' </h2>');
      };

    // start app
    var teamView = new TeamView({ collection: Team });
    $(document.body).append(teamView.render().el);
    
    // ROUTES
    var Router = Backbone.Router.extend({
        routes: {
            '(/)': 'index',
            'stats/*actions/': 'stats'
        },
        stats: function() {  
            StatsView(e);
        }
    });

    var Router = new Router;
    Backbone.history.start({ pushState: true });


