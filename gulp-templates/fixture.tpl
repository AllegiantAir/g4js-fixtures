<% var name = path.basename(file.path, '.json') %>
fixtureStoreProvider.setData('<%= name %>', <%= contents %>);