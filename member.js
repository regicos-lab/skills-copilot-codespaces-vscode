function skillsMember() {
    var member = document.getElementsByClassName('member');
    var skills = document.getElementsByClassName('skills');
    var memberSelect = document.getElementById('memberSelect');
    var memberSelected = memberSelect.options[memberSelect.selectedIndex].value;

    for (var i = 0; i < member.length; i++) {
        member[i].style.display = 'none';
        if (member[i].classList.contains(memberSelected) || memberSelected == 'all') {
            member[i].style.display = 'block';
        }
    }

    for (var i = 0; i < skills.length; i++) {
        skills[i].style.display = 'none';
        if (skills[i].classList.contains(memberSelected) || memberSelected == 'all') {
            skills[i].style.display = 'block';
        }
    }
}
