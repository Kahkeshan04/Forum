document.addEventListener('DOMContentLoaded', function() {
    const queryForm = document.getElementById('query-form');
    const queryList = document.getElementById('query-list');

    queryForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const queryText = document.getElementById('query').value;

        const listItem = document.createElement('li');
        listItem.textContent = queryText;
        queryList.appendChild(listItem);

        document.getElementById('query').value = '';
    });
});
