<% var name = path.basename(file.path, '.json') %>
fixtureDbProvider.setInitialData('<%= name %>', <%= contents %>);