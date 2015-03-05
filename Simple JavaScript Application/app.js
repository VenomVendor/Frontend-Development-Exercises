/*
    # Endpoint URL #
    
    https://api.github.com/search/repositories?q={query}&token={token}
    
    Note: Github imposes a rate limit of 60 request per minute. Documentation can be found at http://developer.github.com/v3/.
    
    # Example Github Response JSON #
    {
      "total_count": 178974,
      "incomplete_results": false,
      "items": [
        {
          "id": 2349728,
          "name": "android",
          "full_name": "github/android",
          "owner": {
            "login": "github",
            "id": 9919,
            "avatar_url": "https://avatars.githubusercontent.com/u/9919?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/github",
            "html_url": "https://github.com/github",
            "followers_url": "https://api.github.com/users/github/followers",
            "following_url": "https://api.github.com/users/github/following{/other_user}",
            "gists_url": "https://api.github.com/users/github/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/github/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/github/subscriptions",
            "organizations_url": "https://api.github.com/users/github/orgs",
            "repos_url": "https://api.github.com/users/github/repos",
            "events_url": "https://api.github.com/users/github/events{/privacy}",
            "received_events_url": "https://api.github.com/users/github/received_events",
            "type": "Organization",
            "site_admin": false
          },
          "private": false,
          "html_url": "https://github.com/github/android",
          "description": "GitHub Android App",
          "fork": false,
          "url": "https://api.github.com/repos/github/android",
          "forks_url": "https://api.github.com/repos/github/android/forks",
          "keys_url": "https://api.github.com/repos/github/android/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/github/android/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/github/android/teams",
          "hooks_url": "https://api.github.com/repos/github/android/hooks",
          "issue_events_url": "https://api.github.com/repos/github/android/issues/events{/number}",
          "events_url": "https://api.github.com/repos/github/android/events",
          "assignees_url": "https://api.github.com/repos/github/android/assignees{/user}",
          "branches_url": "https://api.github.com/repos/github/android/branches{/branch}",
          "tags_url": "https://api.github.com/repos/github/android/tags",
          "blobs_url": "https://api.github.com/repos/github/android/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/github/android/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/github/android/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/github/android/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/github/android/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/github/android/languages",
          "stargazers_url": "https://api.github.com/repos/github/android/stargazers",
          "contributors_url": "https://api.github.com/repos/github/android/contributors",
          "subscribers_url": "https://api.github.com/repos/github/android/subscribers",
          "subscription_url": "https://api.github.com/repos/github/android/subscription",
          "commits_url": "https://api.github.com/repos/github/android/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/github/android/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/github/android/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/github/android/issues/comments{/number}",
          "contents_url": "https://api.github.com/repos/github/android/contents/{+path}",
          "compare_url": "https://api.github.com/repos/github/android/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/github/android/merges",
          "archive_url": "https://api.github.com/repos/github/android/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/github/android/downloads",
          "issues_url": "https://api.github.com/repos/github/android/issues{/number}",
          "pulls_url": "https://api.github.com/repos/github/android/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/github/android/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/github/android/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/github/android/labels{/name}",
          "releases_url": "https://api.github.com/repos/github/android/releases{/id}",
          "created_at": "2011-09-08T16:52:50Z",
          "updated_at": "2015-03-03T15:55:33Z",
          "pushed_at": "2015-02-24T09:22:24Z",
          "git_url": "git://github.com/github/android.git",
          "ssh_url": "git@github.com:github/android.git",
          "clone_url": "https://github.com/github/android.git",
          "svn_url": "https://github.com/github/android",
          "homepage": "https://play.google.com/store/apps/details?id=com.github.mobile",
          "size": 14282,
          "stargazers_count": 5696,
          "watchers_count": 5696,
          "language": "Java",
          "has_issues": true,
          "has_downloads": true,
          "has_wiki": true,
          "has_pages": false,
          "forks_count": 2811,
          "mirror_url": null,
          "open_issues_count": 164,
          "forks": 2811,
          "open_issues": 164,
          "watchers": 5696,
          "default_branch": "master",
          "score": 96.0301
        }
      ]
    }
*/
/* jshint globalstrict: true */
'use strict';
var lastQuery,
    $results = $('#results'),
    $search = $('#search'),
    cacheData = {},
    Global = {
        updateElem: function optional() {
            $search.attr('placeholder', 'cAsE SeNsItIvE')
                .css({
                    'padding-left': '5px',
                    'padding-right': '20px'
                })
                .after('<span id="close">x</span>');
            $('#close').css({
                'margin-left': '-15px',
                'color': '#F00',
                'cursor': 'pointer'
            });
        },
        bindEvents: function bindEvents() {

            $search.on('input', function(e) {
                gitHub.searchRepo($(this).val().trim());
            });

            $('body').on('tap click', '#close', function(e) {
                e.preventDefault();
                $search.val('');
                $results.empty();
            });

            $results.on('tap click', 'a', function(e) {
                e.preventDefault();
                var data = cacheData[lastQuery].items[$(this).data('pos')];
                alert('Id : ' + data.id + '\nFollowers : ' + data.watchers + '\nurl : ' + data.html_url + '\nDescription : ' + data.description);
            });

        },
        isEmpty: function isReallyEmpty(obj) {
            return obj === undefined || obj === 'undefined' || obj === null;
        },
        init: function() {
            this.updateElem(); // update Elements
            this.bindEvents(); // bind Events
        }
    },
    gitHub = {
        searchRepo: function(query) {
            if (query === '') {
                return;
            }
            if (Global.isEmpty(cacheData[query])) {
                console.log("---Loading from query---");
                $.ajax({
                    type: 'GET',
                    dataType: 'JSON',
                    query: query,
                    url: 'https://api.github.com/search/repositories?token={TokenGoesHere}&q=' + query,
                    success: this.cacheShowData,
                    error: this.showError,
                    complete: this.hasCompleted
                });
            } else {
                console.log("---Loading from cache---");
                this.showData(query);
            }
        },
        cacheShowData: function success(dataObj) {
            cacheData[this.query] = dataObj;
            //gitHub.showData(this.query); // Show data on "hasCompleted", since `$.ajax` is Async & no gurantee that last request sent, is last recieved.
        },
        showError: function error(dataTxt) {
            console.log('Error for query : ' + this.query +
                '\nMessage : ' + dataTxt.responseJSON.message +
                '\nFind more at : ' + dataTxt.responseJSON.documentation_url);
        },
        hasCompleted: function complete() {
            gitHub.showData($search.val());
        },
        showData: function(query) {
            var jsonObj = cacheData[query];
            if (Global.isEmpty(jsonObj)) {
                return;
            }
            if (typeof jsonObj === 'string') {
                try {
                    jsonObj = $.parseJSON(jsonObj);
                } catch (e) {
                    console.log(e);
                    return;
                }
            }
            var repos = jsonObj.items;
            lastQuery = query;
            $results.empty();
            $.each(repos, function(i, repo) {
                $results.append('<a href="#" data-pos="' + i + '">' + repo.owner.login + ' / ' + repo.name + '</a><br>');
            });
            $('a').css('font-size', '1.3em'); //Optional
        }
    };

var init = function initAll() { // for future usage.
    Global.init();
};

init();