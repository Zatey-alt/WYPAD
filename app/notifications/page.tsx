'use client';
import React, { useState } from 'react';
import type { ReactElement } from 'react';
import { Bell, Settings, Check, X, MessageCircle, Heart, UserPlus, BookOpen, Award, TrendingUp, Clock, MoreHorizontal } from 'lucide-react';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'like',
      user: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      action: 'liked your story',
      content: '"The Digital Revolution"',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'comment',
      user: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      action: 'commented on your story',
      content: '"Absolutely brilliant perspective on modern technology..."',
      time: '4 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'follow',
      user: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      action: 'started following you',
      content: '',
      time: '6 hours ago',
      read: false
    },
    {
      id: 4,
      type: 'story',
      user: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      action: 'published a new story',
      content: '"The Future of Creative Writing"',
      time: '8 hours ago',
      read: true
    },
    {
      id: 5,
      type: 'achievement',
      user: 'WTPAD Team',
      avatar: 'https://images.unsplash.com/photo-1553028826-f4804a6dfd3f?w=40&h=40&fit=crop&crop=face',
      action: 'Your story reached 1,000 reads!',
      content: '"The Digital Revolution" milestone achieved',
      time: '12 hours ago',
      read: true
    },
    {
      id: 6,
      type: 'trending',
      user: 'WTPAD Editorial',
      avatar: 'https://images.unsplash.com/photo-1553028826-f4804a6dfd3f?w=40&h=40&fit=crop&crop=face',
      action: 'Your story is trending in Technology',
      content: '"The Digital Revolution" is gaining momentum',
      time: '1 day ago',
      read: true
    }
  ]);

  const [filter, setFilter] = useState('all');

interface Notification {
    id: number;
    type: NotificationType;
    user: string;
    avatar: string;
    action: string;
    content: string;
    time: string;
    read: boolean;
}

type NotificationType = 
    | 'like'
    | 'comment'
    | 'follow'
    | 'story'
    | 'achievement'
    | 'trending';
const getNotificationIcon = (type: NotificationType | string): ReactElement => {

    switch (type) {
        case 'like':
            return <Heart className="w-4 h-4 text-red-500" />;
        case 'comment':
            return <MessageCircle className="w-4 h-4 text-blue-500" />;
        case 'follow':
            return <UserPlus className="w-4 h-4 text-green-600" />;
        case 'story':
            return <BookOpen className="w-4 h-4 text-purple-500" />;
        case 'achievement':
            return <Award className="w-4 h-4 text-yellow-500" />;
        case 'trending':
            return <TrendingUp className="w-4 h-4 text-green-600" />;
        default:
            return <Bell className="w-4 h-4 text-gray-500" />;
    }
};

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notif.read;
    return notif.type === filter;
  });

  const unreadCount = notifications.filter(notif => !notif.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
 

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-2 py-4 pt-16">
        <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm">
          {[
            { key: 'all', label: 'All' },
            { key: 'unread', label: 'Unread' },
            { key: 'like', label: 'Likes' },
            { key: 'comment', label: 'Comments' },
            { key: 'follow', label: 'Follows' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === tab.key
                  ? 'bg-green-600 text-white'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-w-7xl mx-auto mx-auto px-2 pb-8">
        <div className="bg-white rounded-lg shadow-sm">
          {filteredNotifications.length === 0 ? (
            <div className="text-center py-12">
              <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No notifications to show</p>
            </div>
          ) : (
            filteredNotifications.map((notification, index) => (
              <div
                key={notification.id}
                className={`flex items-start space-x-3 p-4 hover:bg-gray-50 transition-colors ${
                  !notification.read ? 'bg-green-50 border-l-4 border-green-600' : ''
                } ${index !== filteredNotifications.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                {/* Avatar */}
                <div className="flex-shrink-0 relative">
                  <img
                    src={notification.avatar}
                    alt={notification.user}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-900">
                        <span className="font-semibold">{notification.user}</span>{' '}
                        {notification.action}
                      </p>
                      {notification.content && (
                        <p className="text-sm text-gray-600 mt-1">{notification.content}</p>
                      )}
                      <div className="flex items-center mt-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {notification.time}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center space-x-1 ml-4">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="p-1 text-gray-400 hover:text-green-600 rounded"
                          title="Mark as read"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-1 text-gray-400 hover:text-red-500 rounded"
                        title="Delete notification"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;