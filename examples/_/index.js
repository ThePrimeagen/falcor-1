
var model = new falcor.Model({
    source: new HttpSource('/member.json')
});
model.get('genreLists[0..1].name').then(log);

