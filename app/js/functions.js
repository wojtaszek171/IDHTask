Handlebars.registerHelper('eachInMap', function (map, block) {
  var out = '';
  Object.keys(map).map(function (prop) {
  out += block.fn({ key: prop, value: map[prop] });
  });
  return out;
});

var source = document.getElementById('team-template').innerHTML;
var template = Handlebars.compile(source);
var html = template([
    {
        name: 'Basia Sołtysińska',
        job: 'Founder',
        location: 'Warsaw',
        avatar: 'avatar5.png'
    },
    {
        name: 'Włas Chorowiec',
        job: 'Founder',
        location: 'Warsaw',
        avatar: 'avatar4.png'
    },
    {
        name: 'Edyta Leśniewska',
        job: 'Head of Human Resources',
        location: 'Warsaw',
        avatar: 'avatar3.png'
    },
    {
        name: 'Joanna Pawluk',
        job: 'Chief Growth Officer (CGO)',
        location: 'London',
        avatar: 'avatar2.png'
    },
    {
        name: 'David Saunders',
        job: 'Business Development',
        location: 'London',
        avatar: 'avatar1.png'
    },
    {
        name: 'Adam Eldridge',
        job: 'Business Development Director US',
        location: 'Los Angeles',
        avatar: 'avatar5.png'
    },
    {
        name: 'Maha Mahda',
        job: 'Chief Business Development Officer (CBDO)',
        location: 'Warsaw',
        avatar: 'avatar4.png'
    },
    {
        name: 'Elżbieta Kamińska',
        job: 'International Client Service Manager',
        location: 'Warsaw',
        avatar: 'avatar3.png'
    },
    {
        name: 'Karolina Makuch',
        job: 'Creation Manager',
        location: 'Warsaw',
        avatar: 'avatar2.png'
    },
    {
        name: 'Kamil Bolek',
        job: 'Head of Communication',
        location: 'Warsaw',
        avatar: 'avatar1.png'
    }
]);

document.getElementById('displayTeam').innerHTML = html;
